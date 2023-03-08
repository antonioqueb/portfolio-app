import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import styled from 'styled-components';
import axios from 'axios';

interface SkillProps {
  logo_url: string;
  isDarkMode?: boolean;
}

interface TitleProps {
  isDarkMode: boolean;
}

interface SlideshowProps {
  index: number;
  maxIndex: number;
  maxWidth: number;
}

interface SlideProps {
  isActive: boolean;
  onClick: () => void;
}

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10%;
`;

const Slideshow = styled.div<SlideshowProps>`
  display: flex;
  flex-direction: row;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => -props.index * 200}px);
  margin: 0 0 2rem 0;
  padding: 0 0 2rem 0;
  width: ${(props) => props.index === props.maxIndex ? `${props.maxWidth + 200}px` : `${props.maxWidth}px`};
`;


const Slide = styled.div<SlideProps>`
  background-color: ${({ isActive }) => isActive ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 1/1;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled.img`
  max-width: 50%;
  max-height: 50%;
  object-fit: contain;
  transform: scale(1.0);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const PTitle = styled.div<TitleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  text-align: center;
`;

const Slider = () => {
    const [skills, setSkills] = useState<SkillProps[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const isDarkMode = useSelector(selectIsDarkMode);
    const intervalRef = useRef<number>();
    const sliderContainerRef = useRef<HTMLDivElement>(null);
  
    const fetchSkills = async () => {
      try {
        const response = await axios.get<SkillProps[]>(
          'https://django-server-production-0db9.up.railway.app/api/skill/?format=json'
        );
        const repeatedSkills = [...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data];
        setSkills(repeatedSkills);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchSkills();
    }, []);
  
    useEffect(() => {
        const handleScroll = () => {
            const sliderContainer = sliderContainerRef.current;
            if (sliderContainer) {
              const scrollLeft = sliderContainer.scrollLeft;
              const slideWidth = sliderContainer.clientWidth;
              const activeIndex = Math.floor(scrollLeft / slideWidth);
              setActiveIndex(activeIndex);
            }
          };
          
      sliderContainerRef.current?.addEventListener('scroll', handleScroll);
      return () => sliderContainerRef.current?.removeEventListener('scroll', handleScroll);
    }, [scrollPosition]);
  
    useEffect(() => {
      if (!isPaused) {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) =>
            prevIndex === skills.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
        intervalRef.current = interval;
        return () => clearInterval(interval);
      }
    }, [skills, isPaused]);
  
    const handlePrevClick = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? skills.length - 1 : prevIndex - 1
      );
    };
  
    const handleNextClick = () => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex % skills.length;
      });
    };
  
    const handleSlideClick = (index: number) => {
      setIsPaused(true);
      setActiveIndex(index);
    };
  
    const maxIndex = skills.length - 1;
    const maxWidth = (skills.length - 1) * 200;
  
    return (
      <>
        <PTitle isDarkMode={isDarkMode}>
          <h1>My Skills</h1>
        </PTitle>
        <SliderContainer ref={sliderContainerRef}>
          <Slideshow index={activeIndex} maxIndex={maxIndex} maxWidth={maxWidth}>
            {skills.map(({ logo_url }, index) => (
              <Slide
                key={logo_url}
                isActive={index === activeIndex}
                onClick={() => handleSlideClick(index)}
              >
                <Logo src={logo_url} />
              </Slide>
            ))}
          </Slideshow>
        </SliderContainer>
      </>
    );
  };

export default Slider;
  
