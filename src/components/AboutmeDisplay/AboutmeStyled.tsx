import React from 'react';
import styled from 'styled-components';

interface AboutmeProps {
  title?: string;
  imageSrc?: string;
  isDarkMode?: boolean;
}

interface AboutmeData {
  title: string;
  description: string;
  imageSrc: string;
}

interface AboutmeContainerProps {
  isDarkMode?: boolean;
}

export const Styled = {
  AboutmeContainer: styled.div<AboutmeContainerProps>`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
    transition: background-color 0.5s ease;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      padding: 0;
    }

    @media (max-width: 320px) {
      flex-direction: column;
      padding: 0;
    }
  `,


  ImageContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }

    @media (max-width: 320px) {
      width: 100%;
    }
  `,
  Image: styled.img`
    width: 60%;
    border-radius: 40%;

    @media (max-width: 768px) {
      width: 60%;
    }

    @media (max-width: 480px) {
      width: 50%;
    }

    @media (max-width: 320px) {
      width: 40%;
    }
  `,
  DescriptionContainer: styled.div<AboutmeContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 50%;
    padding-top: 5rem;

    @media (max-width: 768px) {
      width: 100%;
      padding-top: 2rem;
    }

    @media (max-width: 480px) {
      width: 100%;
      padding-top: 2rem;
    }

    @media (max-width: 320px) {
      width: 100%;
      padding-top: 2rem;
    }
  `,
  Title: styled.h1<AboutmeContainerProps>`
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
    align-self: flex-start;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }

    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  `,
  Description: styled.p<AboutmeContainerProps>`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
    white-space: pre-line;

    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }

    @media (max-width: 320px) {
      font-size: 0.8rem;
    }
  `,
};
