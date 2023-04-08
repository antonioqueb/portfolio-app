import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  Styled  from './BlogStyled';
import BlogPost from './BlogPost';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
  date_posted: string;
}

interface BlogDisplayProps {
  isDarkMode?: boolean;
}

const BlogDisplay: React.FC<BlogDisplayProps> = ({ isDarkMode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>('https://queb.online/api/posts/');
      const posts = response.data;
      setPosts(posts);
      setFilteredPosts(posts);

      const uniqueCategories = [...new Set(posts.map((post) => post.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };


  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
  };

  const renderPostList = () => {
    return filteredPosts.map((post, index) => (
      <Styled.Post key={index}>
        <img src={post.image} alt={post.title} />
        <>
        <h3>{post.title}</h3>
        <p>{post.content.slice(0, 210) + '...'}</p>
        
        <button onClick={() => handlePostClick(post.id)}>Leer más</button>
       </>
      </Styled.Post>
    ));
  };

  return (
    <Styled.BlogContainer isDarkMode={isDarkMode}>
      <Styled.PostGrid>
        {renderPostList()}
      </Styled.PostGrid>
      {selectedPostId && <BlogPost postId={selectedPostId} setPostId={setSelectedPostId} />}
    </Styled.BlogContainer>
  );
}

export default BlogDisplay;