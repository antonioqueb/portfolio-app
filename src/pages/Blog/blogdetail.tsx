import React from 'react';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import BlogDisplay from '../../components/BlogDisplay/BlogPost';




const BlogDetail: React.FC = () => {
  
    return (
      <>
      <NavbarDisplay/>
      <BlogPost/>
      <FooterDisplay/>
        
      </>
    );
  };
  
  export default BlogDetail;
  