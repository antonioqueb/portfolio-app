import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "../../reducers/darkmode/darkmodeSlices";
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
const TitleP = styled.h1<{ isDarkMode: boolean }>`
  text-align: center;
  font-size: 2rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
  margin: 2rem 0;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
  display: flex;

`;


const ProjectsContainer = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#dark" : "#fff")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#dark")};
`;

const ProjectContainer = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#dark" : "#fffff")};
  

`;

const Image = styled.img`
  width: 60%;
  height: auto;
  margin-right: 1rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-size: 1rem;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-sratrt;
  margin-top: 1rem;
  
`;

const DemoButton = styled.button<{ isDarkMode: boolean }>`
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

  a {
    text-decoration: none;
    color: white;
  }

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
`;



const GitHubButton = styled.button<{ isDarkMode: boolean }>`
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

a {
  text-decoration: none;
  color: white;
}

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
`;

const Projects = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://django-server-production-0db9.up.railway.app/api/project/?format=json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <ProjectsContainer  id="projects" isDarkMode={isDarkMode}>
      <br/>
      <TitleP style={{ fontSize: '2.5rem', fontWeight: 700 }} isDarkMode={isDarkMode}>Projects</TitleP>
      <TitleP style={{ fontSize: '1.5rem', fontWeight: 400 }} isDarkMode={isDarkMode}>Here you will find my latest projects.</TitleP>
      {projects.map((project) => (
        <ProjectContainer key={project.id} isDarkMode={isDarkMode}>
          <Image src={project.image_url} alt={project.title} />
          <Description>
            <Title
            style={{ fontSize: '2.5rem', fontWeight: 700 }}
            
            >{project.title}</Title>
            <div
            style={{ fontSize: '1.5rem', fontWeight: 400 }}
            >{project.details}</div>
            <ButtonRow>
              <DemoButton style={{ fontSize: '1.5rem', fontWeight: 600 }} isDarkMode={isDarkMode}>
                <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </DemoButton>
              <GitHubButton style={{ fontSize: '1.5rem', fontWeight: 600 }} isDarkMode={isDarkMode}>
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </GitHubButton>
            </ButtonRow>
          </Description>
        </ProjectContainer>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;