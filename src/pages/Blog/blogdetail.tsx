import React from 'react';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import BlogPost from '../../components/BlogDisplay/BlogPost';
import PreloaderDisplay from '../../components/PreloaderDisplay/PreloaderDisplay'


const BlogDetail: React.FC = () => {
  
    return (
      <>
      <PreloaderDisplay/>
      <NavbarDisplay/>
      <BlogPost/>
      <FooterDisplay/>
      </>
    );
};

export default BlogDetail;
