import axios from "axios";

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
  
  export const fetchProjects = (): Promise<Project[]> => {
    return fetch("http://20.77.66.228:8088/api/project/?format=json")
      .then((response) => response.json())
  };
  