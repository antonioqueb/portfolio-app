import React from 'react';
import { useParams } from 'react-router-dom';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import BlogPost from '../../components/BlogDisplay/BlogPost';

const BlogDetail: React.FC = () => {
  const { postId } = useParams<{ postId?: string }>();
  const postIdAsNumber = parseInt(postId || '0', 10);

  return (
    <>
      <NavbarDisplay />
      <BlogPost postId={postIdAsNumber} />
      <FooterDisplay />
    </>
  );
};

export default BlogDetail;
