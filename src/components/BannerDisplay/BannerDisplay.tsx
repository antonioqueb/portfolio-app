import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import styled from 'styled-components';
import axios from 'axios';

interface BannerProps {
  isDarkMode: boolean;
  title?: string;
  description?: string;
  galery?: string;
}

interface ButtonProps {
  isDarkMode: boolean;
}

const BannerWrapper = styled.div<BannerProps>`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const LeftColumn = styled.div<BannerProps>`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;

  align-items: center;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const BannerSubtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 3rem;
`;

const Button = styled.a<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%,#FE53BB 45%, #8F51EA 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
  margin: 0 1rem;
  text-decoration: none;
  color: white;
  margin-bottom: 2rem;
  color: #fffff;


  strong {
    z-index: 2;
    font-family: 'Avalon Personal Use', cursive;
    font-size: 12px;
    letter-spacing: 5px;
    color: #FFFFFF;
    text-shadow: 0 0 4px white;
    text-decoration: none;
    position: relative;
  }

  strong::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-out;
    color: #fffff;

  }

  strong:hover::after {
    transform: scaleX(1);
  }

  #container-stars {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    color: #fffff;

  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;

    .circle {
      width: 100%;
      height: 30px;
      filter: blur(2rem);
      animation: pulse_3011 4s infinite;
      z-index: -1;
    }

    .circle:nth-of-type(1) {
      background: rgba(254, 83, 186, 0.636);
    }

    .circle:nth-of-type(2) {
      background: rgba(142, 81, 234, 0.704);
    }
  }

  &:hover #container-stars {
    z-index: 1;
    background-color: #fffff;
    color: #fffff;

  }

  &:hover {
    transform: scale(1.1);
    color: #fffff;
  }

  &:active {
    border: double 4px #FE53BB;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
    color: #fffff;

    .circle {
      background: #FE53BB;
    }
  }

  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;

    &::after {
      content: "";
      position: absolute;
      top: -10rem;
      left: -100rem;
      width: 100%;
      height: 100%;
      animation: animStarRotate 90s linear infinite;
      background-image: radial-gradient(#ffffff 1px, transparent 1%);
      background-size: 50px 50px;
      color: #fffff;
    }

    &::before {
      content: "";
      position:
      absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
  color: #fffff;
}
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-135rem);
  }
  
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  
  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  
  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
`;
  
  




const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightColumn = styled.div<BannerProps>`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
`;

const Image = styled.img`
  width: 80%;
`;

const BannerDisplay: React.FC = () => {
  const isDarkMode: boolean = useSelector(selectIsDarkMode);
  const [profile, setProfile] = useState<BannerProps>({ isDarkMode });
  const [galery, setGalery] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<BannerProps>('https://django-server-production-0db9.up.railway.app/api/me/8/?format=json')
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios.get<{ galery: string }>('https://django-server-production-0db9.up.railway.app/api/me/7/?format=json')
      .then(response => {
        setGalery(response.data.galery);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BannerWrapper isDarkMode={isDarkMode} title={profile?.title} description={profile?.description}>
      <LeftColumn isDarkMode={isDarkMode}>
        <BannerTitle style={{ fontSize: '2.5rem', fontWeight: 700 }}>{profile?.title}</BannerTitle>
        <BannerSubtitle>{profile?.description}</BannerSubtitle>
        <ButtonContainer>
          <Button 
           href="https://cv.queb.online/" target="_blank" rel="noopener noreferrer"
           style={{ fontSize: '1.5rem', fontWeight: 600 }}
           isDarkMode={isDarkMode}

           
           
           >Download CV</Button>
          <Button 
          href="#Contactme" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '1.5rem', fontWeight: 600 }}
          isDarkMode={isDarkMode}
          
          >Contact me</Button>
        </ButtonContainer>
      </LeftColumn>
      <RightColumn isDarkMode={isDarkMode} galery={galery}>
        {galery && <Image src={galery} alt="galery"  />}
      </RightColumn>
    </BannerWrapper>
  );
};

export default BannerDisplay;
