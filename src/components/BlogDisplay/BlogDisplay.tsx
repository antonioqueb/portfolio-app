import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Styled } from './BlogStyled';

interface Post {
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
            <h2>{post.title}</h2>
            <p>{post.content.slice(0, 15) + "..."}</p>
            <p><b>Categoría:</b> {post.category}</p>
            <img src={post.image} alt={post.title} />
            <p><b>Fecha:</b> {post.date_posted}</p>
            <a href={`/blog/${post.id}`}>Leer más</a>
          </Styled.Post>
        ))}
      </Styled.PostGrid>
    </Styled.BlogContainer>
  );
};

export default BlogDisplay;
