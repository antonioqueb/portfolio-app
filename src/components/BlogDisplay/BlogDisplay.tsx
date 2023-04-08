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

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);

    if (category === '') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => post.category === category);
      setFilteredPosts(filtered);
    }
  };

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
  };

  const renderPostList = () => {
    return filteredPosts.map((post, index) => (
      <Styled.Post key={index}>
        <h3>{post.title}</h3>
        <p>{post.content.slice(0, 40) + '...'}</p>
        <p>
          <b>Categoría:</b> {post.category}
        </p>
        <img src={post.image} alt={post.title} />
        <p>
          <b>Fecha:</b> {post.date_posted}
        </p>
        <button onClick={() => handlePostClick(post.id)}>Leer más</button>
      </Styled.Post>
    ));
  };

  return (
    <Styled.BlogContainer isDarkMode={isDarkMode}>
      <h1>Blog</h1>
      <label htmlFor="categories">Filtrar por categoría:</label>
      <Styled.CategorySelect
        id="categories"
        value={selectedCategory}
        onChange={(e) => filterByCategory(e.target.value)}
      >
        <option value="">Todas</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </Styled.CategorySelect>
      <Styled.PostGrid>
        {filteredPosts.map((post, index) => (
          <Styled.Post key={index}>
            <h3>{post.title}</h3>
            <p>{post.content.slice(0, 40) + "..."}</p>
            <p><b>Categoría:</b> {post.category}</p>
            <img src={post.image} alt={post.title} />
            <p><b>Fecha:</b> {post.date_posted}</p>
            <button onClick={() => setSelectedPostId(post.id)}>Leer más</button>
          </Styled.Post>
        ))}
      </Styled.PostGrid>
      {selectedPostId && <BlogPost postId={selectedPostId} setPostId={setSelectedPostId} />}
    </Styled.BlogContainer>
  );
};

export default BlogDisplay;