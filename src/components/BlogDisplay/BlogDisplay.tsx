import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  StyledBlog  from './BlogStyled';
import BlogPost from './BlogPost';
import { selectIsDarkMode } from './reducers/darkmode/darkmodeSlices';
import { useSelector } from 'react-redux';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
  date_posted: string;
}


const BlogDisplay: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const isDarkMode = useSelector(selectIsDarkMode);


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
      <StyledBlog.Post key={index} isDarkMode={isDarkMode}>
        <img src={post.image} alt={post.title} />
        <>
        <h3>{post.title}</h3>
        <p>{post.content.slice(0, 210) + '...'}</p>
        
        <StyledBlog.ReadMoreButton onClick={() => handlePostClick(post.id)}>Read more...</StyledBlog.ReadMoreButton>
       </>
      </StyledBlog.Post>
    ));
  };
  
  return (
    <StyledBlog.BlogContainer isDarkMode={isDarkMode}>
      <StyledBlog.PostGrid isDarkMode={isDarkMode} >
        {renderPostList()}
      </StyledBlog.PostGrid>
      {selectedPostId && <BlogPost postId={selectedPostId} setPostId={setSelectedPostId} />}
    </StyledBlog.BlogContainer>
  );
}

export default BlogDisplay;