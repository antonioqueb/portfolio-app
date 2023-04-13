import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "../../reducers/darkmode/darkmodeSlices";
import {Styled} from "./ProjectsStyled";
import { fetchProjects } from "./ProjectsApi"

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
;

const Projects = () => {

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const image = e.currentTarget;
    const rect = image.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (mouseX - centerX) / centerX;
    const percentY = (mouseY - centerY) / centerY;

    image.style.transform = `perspective(600px) rotateX(${-percentY * 10}deg) rotateY(${percentX * 10}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    const image = e.currentTarget;
    image.style.transform = 'perspective(600px) rotateX(0) rotateY(0)';
  };




  const isDarkMode = useSelector(selectIsDarkMode);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then((data) => setProjects(data));
  }, []);

  return (
    <Styled.ProjectsContainer  id="projects" isDarkMode={isDarkMode}>
      <br/>
      <Styled.TitleP style={{  fontWeight: 700 }} isDarkMode={isDarkMode}>Projects</Styled.TitleP>
      <Styled.TitleP style={{  fontWeight: 400 }} isDarkMode={isDarkMode}>Here you will find my latest projects.</Styled.TitleP>
      {projects.map((project) => (
        <Styled.ProjectContainer key={project.id} isDarkMode={isDarkMode}>
          <Styled.Image src={project.image_url} alt={project.title} />
          <Styled.Description>
            <Styled.Title
            style={{ fontWeight: 600 }}
            
            >{project.title}</Styled.Title>
            <div
            style={{  fontWeight: 400 }}
            >{project.details}</div>
            <Styled.ButtonRow>
              <Styled.DemoButton style={{ fontWeight: 600 }} isDarkMode={isDarkMode}>
                <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </Styled.DemoButton>
              <Styled.GitHubButton style={{  fontWeight: 600 }} isDarkMode={isDarkMode}>
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Styled.GitHubButton>
            </Styled.ButtonRow>
          </Styled.Description>
        </Styled.ProjectContainer>
      ))}
    </Styled.ProjectsContainer>
  );
};

export default Projects;
