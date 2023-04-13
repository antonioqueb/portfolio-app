import styled from "styled-components";

interface Project {
  id: number;
  title: string;
  date: string;
  demo_url: string;
  github_url: string;
  details: string;
  technologies: {
    Technologies: string[];
  };
  languages: {
    Languages: string;
  };
  image_url: string;
}

export const Styled = {

TitleP : styled.h1<{ isDarkMode: boolean }>`
  text-align: center;
  font-size: 3.2rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
  margin: 2rem 0;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.8rem;
  }

`,


ProjectsContainer : styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#dark" : "#fff")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#dark")};

  @media (max-width: 1024px) {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.2rem;
  }

  @media (max-width: 320px) {
    margin-top: 0.1rem;
  }


`,

ProjectContainer : styled.div<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#dark" : "#fffff")};

  @media (max-width: 1620px) {
    width: 95%;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 95%;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    width: 95%;
  }


  

`,

Image : styled.img`
  width: 60%;
  height: auto;
  margin-right: 1rem;

  @media (max-width: 1620px) {
    width: 40%;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 40%;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    width: 40%;
    margin-right: 0;

  }

  @media (max-width: 320px) {
    width: 40%;
    margin-right: 0;

  }

`,

Description : styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-size: 1.6rem;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 70%;

  }

  @media (max-width: 480px) {
    font-size: 1rem;
    width: 80%;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
    width: 90%;
  }
`,

Title : styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  width: 90%;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
    width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    width: 90%;
  }

  @media (max-width: 320px) {
    font-size: 1.8rem;
    width: 90%;
  }
`,

ButtonRow : styled.div`
  display: flex;
  justify-content: flex-sratrt;
  margin-top: 1rem;

  @media (max-width: 480px) {
    justify-content: center;
  }

  @media (max-width: 320px) {
    justify-content: center;
  }
  
  
`,

DemoButton : styled.button<{ isDarkMode: boolean }>`
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
  text-decoration: none;
  color: white;
  margin-top: 1rem;
 
  a {
    text-decoration: none;
    color: white;
  }

  strong {
    z-index: 2;
    font-family: 'Roboto';
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
    background-color: #212121;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    border: double 4px #FE53BB;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;

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



GitHubButton : styled.button<{ isDarkMode: boolean }>`
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
margin-top: 1rem;


a {
  text-decoration: none;
  color: white;
}

strong {
  z-index: 2;
  font-family: 'Roboto';
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
  background-color: #212121;
}

&:hover {
  transform: scale(1.1);
}

&:active {
  border: double 4px #FE53BB;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;

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

}