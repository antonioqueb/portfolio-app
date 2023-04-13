import styled from 'styled-components';

interface StyledProps {
  isDarkMode: boolean;
}

export const ContactFormWrapper = styled.div<StyledProps>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#222831' : '#ffffff')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#222831')};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h2<StyledProps>`
  display: flex;
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#222831')};
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }


`;

export const Form = styled.form``;

export const Label = styled.label<StyledProps>`
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#222831')};
`;

export const Input = styled.input<StyledProps>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#393e46' : '#f1f1f1')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#222831')};
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea<StyledProps>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#393e46' : '#f1f1f1')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#222831')};
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  height: 150px;
  margin-bottom: 1rem;
  resize: none;
`;

export const SubmitButton = styled.button<StyledProps>`
  margin-left: auto;
  margin-right: auto;
  display: block;
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
  text-decoration: none;
  color: white;



  strong {
    z-index: 2;
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
    position: absolute;
    top: 0;
    left: 0;
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
    transform: scale(1.2);
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


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 30%;
  min-width: 300px;
  margin: 0 auto;

  
  @media (max-width: 1024px) {
    max-width: 90%;
  }
  

  @media (max-width: 768px) {
    max-width: 95%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }

  @media (max-width: 320px) {
    max-width: 100%;
  }
`;