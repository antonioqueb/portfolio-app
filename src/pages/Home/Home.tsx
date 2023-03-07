import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import { useAppSelector } from '../../app/hooks';
import { selectPosts } from '../../reducers/blog/blogSlice';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import BannerDisplay from '../../components/BannerDisplay/BannerDisplay';
import AboutmeDisplay from '../../components/AboutmeDisplay/AboutmeDisplay';
import ProjectsDisplay from '../../components/ProjectsDisplay/ProjectsDisplay';

const Home: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/archivos/me/ricardo-draw.png');
        const { galery } = response.data;
        console.log('Image URL:', galery);
        console.log('Image source:', imageSrc);
        setImageSrc(galery);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchImageData();
  }, []);
  

  return (
    <>
      <NavbarDisplay />
      <BannerDisplay />
      <AboutmeDisplay
        title="About me"
        description="Greetings, I'm Antonio - a self-taught programmer with a passion for DevOps and data analysis. At the Ministry of Protection and Urban Security, I lead projects involving data analysis and customized statistics, and use Python, Flask, Django, React.ts, Node.js and TypeScript to develop both back-end and front-end systems."
        imageSrc={imageSrc}
      />
      <ProjectsDisplay />
      <FooterDisplay />
      console.log('Image source:', imageSrc);

    </>
  );
};

export default Home;
