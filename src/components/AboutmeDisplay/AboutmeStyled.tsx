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
  `,
  ImageContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 50%;
  `,
  Image: styled.img`
    width: 60%;
    border-radius: 40%;
  `,
  DescriptionContainer: styled.div<AboutmeContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 50%;
    padding-top: 5rem;
  `,
  Title: styled.h1<AboutmeContainerProps>`
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
    align-self: flex-start;
  `,
  Description: styled.p<AboutmeContainerProps>`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
    white-space: pre-line;
  `,
};
