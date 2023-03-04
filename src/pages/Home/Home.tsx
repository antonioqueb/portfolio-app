import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import { useAppSelector } from '../../app/hooks';
import { selectPosts } from '../../reducers/blog/blogSlice';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';



const Home: React.FC = () => {
  return (
    <>
      <NavbarDisplay />
      <FooterDisplay />
    </>
  );
};

export default Home;
