import React, { useState } from 'react';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/NavbarDisplay/FooterDisplay/FooterDisplay';

const Home: React.FC = () => {

  return (
    <div>
      <NavbarDisplay />
        <h1>Home</h1>
      <FooterDisplay />
    </div>
  );
};

export default Home;