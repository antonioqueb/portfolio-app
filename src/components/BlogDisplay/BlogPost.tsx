import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import Styled from './BlogStyled';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
  date_posted: string;
}

interface BlogPostProps {
  postId: number;
  setPostId: Dispatch<SetStateAction<number | null>>;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, setPostId }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get<Post>(`https://queb.online/api/posts/${postId}/`);
      const post = response.data;
      setPost(post);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Styled.BlogContainer>
      <h1>{post.title}</h1>
      <p><b>Categoría:</b> {post.category}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <p><b>Fecha:</b> {post.date_posted}</p>
      <button onClick={() => setPostId(null)}>Volver al blog</button>
    </Styled.BlogContainer>
  );
};

export default BlogPost;
