import React from 'react';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import BlogPost from '../../components/BlogDisplay/BlogPost';
import { useParams } from 'react-router-dom';



const BlogDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  
    return (
      <>
      <NavbarDisplay/>
      <BlogPost postId={postId} />
      <FooterDisplay/>
      </>
    );
};

export default BlogDetail;
