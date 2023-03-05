import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';

interface AboutmeProps {
  title: string;
  description: string;
  imageSrc: string;
}

interface AboutmeContainerProps {
  isDarkMode: boolean;
}

const AboutmeContainer = styled.div<AboutmeContainerProps>`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
  transition: background-color 0.5s ease;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 60%;
`;

const Image = styled.img`
  width: 60%;
  border-radius: 40%;
`;

const DescriptionContainer = styled.div<AboutmeContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 50%;
  padding-top: 5rem;
`;

const Title = styled.h1<AboutmeContainerProps>`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};

`;

const Description = styled.p<AboutmeContainerProps>`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
`;

const AboutmeDisplay: React.FC<AboutmeProps> = ({ title, description, imageSrc }) => {
  const isDarkMode: boolean = useSelector(selectIsDarkMode);

  return (
    <AboutmeContainer isDarkMode={isDarkMode}>
      <ImageContainer>
        <Image src={imageSrc} alt="Profile" />
      </ImageContainer>
      <DescriptionContainer isDarkMode={isDarkMode}>
        <Title
            isDarkMode={isDarkMode}
        >{title}</Title>
        <Description
            isDarkMode={isDarkMode}
        >{description}</Description>
      </DescriptionContainer>
    </AboutmeContainer>
  );
};

export default AboutmeDisplay;