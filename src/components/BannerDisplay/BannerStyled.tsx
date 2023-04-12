import React from 'react';
import styled from 'styled-components';


interface BannerProps {
  isDarkMode: boolean;
  title?: string;
  description?: string;
  galery?: string;
}

interface ButtonProps {
  isDarkMode: boolean;
}

export const Styled = {

    BannerWrapper : styled.div<BannerProps>`
        height: 100vh;
        display: flex;
        flex-direction: row;


        @media (max-width: 768px) {
            flex-direction: column;
        }

        @media (max-width: 480px) {
            flex-direction: column;
            
        }

        @media (max-width: 320px) {
            flex-direction: column;
        }
        `,

    LeftColumn : styled.div<BannerProps>`
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 2rem;

        align-items: center;
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
        text-align: center;

    

     
        @media (max-width: 768px) {
            flex-basis: 100%;
            padding: 0 1rem;
        }

        @media (max-width: 480px) {
            flex-basis: 100%;
            padding: 0 1rem;
        }

        @media (max-width: 320px) {
            flex-basis: 100%;
            padding: 0 1rem;
        }



        `,

    BannerTitle : styled.h1`
        font-size: 3rem;
        margin-bottom: 2rem;
        font-family: 'Roboto', sans-serif;
        display: flex;
        justify-content: flex-sratrt;
        flex-direction: column;


        @media (max-width: 768px) {
            font-size: 2rem;
        }

        @media (max-width: 480px) {
            font-size: 1.3rem;
        }

        @media (max-width: 320px) {
            font-size: 0.7rem;
        }
        
        `,

    BannerSubtitle : styled.h2`
        font-size: 1.8rem;
        margin-bottom: 3rem;
        font-family: 'Roboto', sans-serif;
        display: flex;
        justify-content: flex-sratrt;
        flex-direction: column;


        @media (max-width: 768px) {
            font-size: 1.2rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
        }

        @media (max-width: 320px) {
            font-size: 0.5rem;
        }
        `,

    Button : styled.a<ButtonProps>`
    display: flex;
    justify-content: center;
    display: flex;
    align-items: flex-start;
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
    

    @media (max-width: 768px) {
        width: 10rem;
        height: 2.5rem;
        margin-top: 1rem;
        
    }

    @media (max-width: 480px) {
        width: 8rem;
        height: 2rem;
        margin-top: 1rem;
    }

    @media (max-width: 320px) {
        width: 6rem;
        height: 1.5rem;
        margin-top: 1rem;
    }
    
    
    strong {
        z-index: 2;
        font-size: 12px;
        letter-spacing: 5px;
        color: #fffff;
        text-shadow: 0 0 4px white;
        text-decoration: none;
        position: relative;

        @media (max-width: 768px) {
            font-size: 10px;
        }

        @media (max-width: 480px) {
            font-size: 8px;
        }

        @media (max-width: 320px) {
            font-size: 6px;
        }
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

        @media (max-width: 768px) {
            height: 1px;
        }

        @media (max-width: 480px) {
            height: 1px;
        }

        @media (max-width: 320px) {
            height: 1px;
        }
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
        color: #ffffff;
    
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

        @media (max-width: 768px) {
            width: 8rem;
            height: 20px;
        }

        @media (max-width: 480px) {
            width: 6rem;
            height: 15px;
        }

        @media (max-width: 320px) {
            width: 4rem;
            height: 10px;
        }
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
        color: #fffff;
        text-decoration: none;

    
    }
    
    &:hover {
        transform: scale(1.1);
        color: #E5FFFE;
        text-decoration: none;
    }
    
    
    &:active {
        border: double 4px #FE53BB;
        background-origin: border-box;
        background-clip: content-box, border-box;
        animation: none;
        color: #fffff;

        @media (max-width: 768px) {
            width: 10rem;
            height: 2.5rem;
        }

        @media (max-width: 480px) {
            width: 8rem;
            height: 2rem;
        }

        @media (max-width: 320px) {
            width: 6rem;
            height: 1.5rem;
        }
    
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
        `,
    

    ButtonContainer : styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        @media (max-width: 480px) {
            flex-direction: column;
        }

        @media (max-width: 320px) {
            flex-direction: column;
        }
        `,

    RightColumn : styled.div<BannerProps>`
        flex-basis: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};

        @media (max-width: 768px) {
            flex-basis: 100%;
            margin-top: 2rem;
        
        }

        @media (max-width: 480px) {
            flex-basis: 100%;
            margin-top: 2rem;
            display: none;
        }

        @media (max-width: 320px) {
            flex-basis: 100%;
            margin-top: 2rem;
            display: none;
        }



    `,

    Image : styled.img`
        width: 80%;

        @media (max-width: 1200px) {
            width: 100%;
        }

        @media (max-width: 768px) {
            width: 80%;
        }

        @media (max-width: 480px) {
            display: none;
            width: 60%;
        }

        @media (max-width: 320px) {
            display: none;
        }
    `,

}