import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as BlogPostStyled from './BlogPostStyled';



interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
  date_posted: string;
}

interface BlogPostProps {
    post: Post;
    onClick: () => void;
    postId: number; // Agregamos la propiedad postId
    setPostId: Dispatch<SetStateAction<number | null>>;
  }
  

const BlogPost: React.FC<BlogPostProps> = ({ id, setPostId }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get<Post>(`https://queb.online/api/posts/${id}/`);
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
    <BlogPostStyled.BlogContainer>
      <h1>{post.title}</h1>
      <p><b>Categoría:</b> {post.category}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <p><b>Fecha:</b> {post.date_posted}</p>
      <button onClick={() => setPostId(0)}>Volver al blog</button>
    </BlogPostStyled.BlogContainer>
  );
};

export default BlogPost;
