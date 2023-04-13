import styled from 'styled-components';
import React from 'react';

interface Skill {
  id: number;
  name: string;
  logo_url: string;
  experience: string;
}

interface TitleProps {
  isDarkMode: boolean;
}

interface CarouselState {
  skills: Skill[];
  currentIndex: number;
}

export const SkillStyled = {
  Title: styled.h1<TitleProps>`
    text-align: center;
    font-size: 2rem;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
    margin: 2rem 0;
    padding: 0 2rem;
    align-items: center;
    justify-content: center;
    display: flex;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  Container: styled.div<{ isDarkMode: boolean }>`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};

    @media (max-width: 768px) {
      display: none;
    }
  `,

  LogoContainer: styled.div<{ isDarkMode: boolean }>`
    width: 100px;
    height: 100px;
    margin-right: 20px;
    margin: auto;
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    @media (max-width: 768px) {
      display: none;
    }

  
  `,

  Logo: styled.img<{ isDarkMode: boolean }>`
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};

    @media (max-width: 768px) {
      width: 50%;
      height: 50%;
    }

    @media (max-width: 480px) {
      width: 40%;
      height: 40%;
    }

    @media (max-width: 320px) {
      width: 30%;
      height: 30%;
    }
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  Button: styled.button`
    border: none;
    background-color: transparent;
    color: #ccc;
    font-size: 2rem;
    cursor: pointer;
    margin: 0 10px;
    @media (max-width: 768px) {
      display: none;
    }
  `,

  Background: styled.div<{ isDarkMode: boolean }>`
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      display: none;
    }
  `,
};
