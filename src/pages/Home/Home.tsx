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
  const [description, setDescription] = useState<string>('');

  const isDarkMode: boolean = useSelector(selectIsDarkMode);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://django-server-production-0db9.up.railway.app/api/me/1/?format=json');
        const { galery } = response.data;
        setImageSrc(galery);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDescription = async () => {
      try {
        const response = await axios.get('https://django-server-production-0db9.up.railway.app/api/me/4/?format=json');
        const { description } = response.data;
        setDescription(description);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
    fetchDescription();
  }, []);

  return (
    <>
      <NavbarDisplay />
      <BannerDisplay />
      <AboutmeDisplay
        title="About me"
        description={description}
        imageSrc={imageSrc}
      />
      <ProjectsDisplay />
      <FooterDisplay />
    </>
  );
};

export default Home;
