import React from 'react';
import { useSelector } from 'react-redux';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import BannerDisplay from '../../components/BannerDisplay/BannerDisplay';
import AboutmeDisplay from '../../components/AboutmeDisplay/AboutmeDisplay';
import ProjectsDisplay from '../../components/ProjectsDisplay/ProjectsDisplay';
import Carousel from '../../components/SkillDisplay/SkillDisplay';
import ContactDisplay from '../../components/ContactDisplay/ContactDisplay';

const Home: React.FC = () => {
  const isDarkMode: boolean = useSelector(selectIsDarkMode);

  return (
    <>
      <NavbarDisplay />
      <BannerDisplay />
      <AboutmeDisplay isDarkMode={isDarkMode} />
      <Carousel />
      <ProjectsDisplay />
      <ContactDisplay 
      />
      <FooterDisplay />
    </>
  );
};

export default Home;
