import React from 'react';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import BlogDisplay from '../../components/BlogDisplay/BlogDisplay';
import PreloaderDisplay from '../../components/PreloaderDisplay/PreloaderDisplay'





const Blog: React.FC = () => {
  
    return (
      <>
      <PreloaderDisplay/>
      <NavbarDisplay/>
      <BlogDisplay/>
      <FooterDisplay/>
        
      </>
    );
  };
  
  export default Blog;
  