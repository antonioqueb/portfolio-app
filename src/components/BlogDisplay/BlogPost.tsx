import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import StyledPost from './BlogStyledPost';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
  date_posted: string;
}

interface BlogPostProps {
  postId?: number;
  setPostId?: Dispatch<SetStateAction<number | null>>;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, setPostId }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [postId]); // Agregar postId como dependencia

  useEffect(() => {
    if (post) {
      setLoaded(true);
    }
  }, [post]);

  const fetchPost = async () => {
    if (postId) {
      try {
        const response = await axios.get<Post>(`https://queb.online/api/posts/${postId}/`);
        const post = response.data;
        setPost(post);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <StyledPost.BlogPostContainer loaded={loaded}>
      <h1>{post.title}</h1>
      <p>{post.author.name}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <p><b>Fecha:</b> {post.date_posted}</p>
    </StyledPost.BlogPostContainer>
  );
};

export default BlogPost;
