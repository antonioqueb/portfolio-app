import React from 'react';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import BlogPost from '../../components/BlogDisplay/BlogPost';


const BlogDetail: React.FC = () => {
  
    return (
      <>
      <NavbarDisplay/>
      <BlogPost postId={1} setPostId={setId}/>
      <FooterDisplay/>
      </>
    );
};

export default BlogDetail;
