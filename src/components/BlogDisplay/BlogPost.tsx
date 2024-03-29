import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import StyledPost from './BlogStyledPost';


interface Author {
  id: number;
  name: string;
  bio: string;
  profile_pic: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
  date_posted: string;
  author: Author;
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-EN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formatter.format(date);
  };
  
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

  const formattedContent = post.content.split('\r\n\r\n').map((paragraph, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
  ));

  return (
    <StyledPost.BlogPostContainer loaded={loaded}>
      <div className="post-image-container">
        <img src={post.image} alt={post.title} />
        <div className="post-image-overlay">
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <p className="author-info">Author: {post.author.name}</p>
        </div>
      </div>
      <div className="blog-content">
        {formattedContent}
        <p>{formatDate(post.date_posted)}</p>
      </div>
    </StyledPost.BlogPostContainer>
  );
};

export default BlogPost;
