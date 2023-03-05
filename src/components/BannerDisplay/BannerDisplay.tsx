import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import styled from 'styled-components';

interface BannerProps {
  isDarkMode: boolean;
}

// Styled component for the banner wrapper
const BannerWrapper = styled.div<BannerProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'rgb(30,30,30)' : 'white')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
`;

// Styled components for the banner title and subtitle
const BannerTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const BannerSubtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

// Styled component for the contact me button
const Button = styled.a`
  display: space-between;
  padding: 1rem 1.2rem;
  border-radius: 5px;
  background-color: #468E99;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.5s ease, color 0.5s ease;
  margin: 0 0.5rem;

  &:hover {
    background-color: #ffff;
    color: black;
    border: 2px solid black;

  }
`;

// Styled component for the container
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// Banner component that displays the banner wrapper, title, subtitle and contact me button
const BannerDisplay: React.FC = () => {
  const isDarkMode: boolean = useSelector(selectIsDarkMode);

  return (
    <BannerWrapper isDarkMode={isDarkMode}>
      <BannerTitle>Hello, I'm Antonio Queb</BannerTitle>
      <BannerSubtitle>A Data-Driven Full-Stack Developer with a passion for problem-solving</BannerSubtitle>
      <ButtonContainer>
        <Button href="#">Dowland CV</Button>
        <Button href="#">Contact me</Button>
      </ButtonContainer>
    </BannerWrapper>
  );
};

export default BannerDisplay;
