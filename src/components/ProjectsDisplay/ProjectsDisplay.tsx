import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';

interface Project {
    id: number;
    title: string;
    description: string;
    gitUrl: string;
    demoUrl: string;
  }
  

interface ProjectCardProps {
    project: Project;
    isDarkMode: boolean;
  }
  
const projects = [  {    id: 1,    title: 'CashConvert',    description: 'CashConvert is a web app for quick and easy currency conversions. Its intuitive interface allows you to enter the amount and currency, select the desired currency, and see the equivalent amount in real-time.',    gitUrl: 'https://github.com',    demoUrl: 'https://cash-convert.queb.online/',  },  
                    {    id: 2,    title: 'Clima Mundo',    description: 'Clima Mundo is a web app that lets you check the temperature, humidity, and sky conditions in any location worldwide. With real-time data, you can plan your day accordingly and stay informed about the weather wherever you go.',    gitUrl: 'https://github.com',    demoUrl: 'http://clima-mundo.queb.online/',  },  
                    {    id: 3,    title: 'SafePass',    description: 'SafePass generates strong passwords with a simple web interface. Protect your accounts with unique and secure passwords, and keep your personal information safe from online threats.',    gitUrl: 'https://github.com/antonioqueb/safepass-app',    demoUrl: 'https://demo.com',  },  
                    {    id: 4,    title: 'Brand Name Generator',    description: 'The Brand Name Generator is a web tool that helps you create unique and memorable names for your brand or business. Simply enter a few keywords, and the generator will provide you with a list of creative name suggestions to choose from.',    gitUrl: 'https://github.com',    demoUrl: 'https://brand-name-generator.queb.online/',  },];

const ProjectsWrapper = styled.div<ProjectCardProps>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem 0 0;
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : '#fff')};
  transition: background-color 0.5s ease;

`;
  
const ProjectCard = styled.div<ProjectCardProps & { project: ProjectCardProps['project'] }>`
  width: calc(25% - 1rem);
  margin-bottom: 2rem;
  padding: 0 1rem;
  margin-right: 1rem;
  box-sizing: border-box;
  background: ${({ isDarkMode }) =>
    isDarkMode ? 'light)' : 'withe'};
  border-radius: 10px;
  box-shadow: ${({ isDarkMode }) =>
    isDarkMode
      ? '0px 0px 15px rgba(255, 255, 255, 0.05)'
      : '0px 0px 15px rgba(0, 0, 0, 0.2)'};
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;


const PTitle = styled.div<ProjectCardProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    margin-bottom: 1rem;
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};

`;


const ProjectTitle = styled.h3<ProjectCardProps>`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
`;

const ProjectDescription = styled.p<ProjectCardProps>`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
`;

const Button = styled.a`
display: inline-block;
padding: 0.8rem 1.5rem;
border-radius: 5px;
background-color: #468e99;
color: #fff;
text-decoration: none;
font-size: 1.1rem;
transition: background-color 0.5s ease, color 0.5s;

margin-right: 1rem;

&:hover {
background-color: #ffff;
color: black;
border: 2px solid black;
}
`;
const GitHubButton = styled(Button)`
  background-color: #181616;
  margin-right: 0;
`;
const ProjectsDisplay: React.FC = () => {
    const isDarkMode = useSelector(selectIsDarkMode);
  
    return (
        <>
        <PTitle
            isDarkMode={isDarkMode}
            project={projects[0]}

        >
                
                <h1
                    style={{ fontSize: '2.5rem', fontWeight: 700 }}
                >
                    Proyectos
                </h1>

             </PTitle>
        <ProjectsWrapper
            isDarkMode={isDarkMode}
            project={projects[0]}

        >

            


            {projects.map((project) => (
                <ProjectCard
                    project={project}
                    isDarkMode={isDarkMode}
                    key={project.id}
                >
                    <ProjectTitle
                        isDarkMode={isDarkMode}
                        project={project}
                    >
                        {project.title}
                    </ProjectTitle>
                    <ProjectDescription
                        isDarkMode={isDarkMode}
                        project={project}
                    >
                        {project.description}
                    </ProjectDescription>

                    <GitHubButton href={project.gitUrl}>Ver en GitHub</GitHubButton>
                    <Button href={project.demoUrl}>Ver demo</Button>
                </ProjectCard>
            ))}
        </ProjectsWrapper>
        </>
    );

  };
  
  export default ProjectsDisplay;
  