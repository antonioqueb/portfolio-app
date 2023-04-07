import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    fetchPost();
  }, []);


  useEffect(() => {
    if (post) {
      setLoaded(true);
    }
  }, [post]);

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
    <Styled.BlogPostContainer loaded={loaded}>
      <h1>{post.title}</h1>
      <p><b>Categoría:</b> {post.category}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <p><b>Fecha:</b> {post.date_posted}</p>
    </Styled.BlogPostContainer>
  );
};


export default BlogPost;
