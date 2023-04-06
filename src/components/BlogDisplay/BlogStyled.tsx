import styled from 'styled-components';

interface BlogContainerProps {
  isDarkMode?: boolean;
}

export const Styled = {
  BlogContainer: styled.div<BlogContainerProps>`
    padding: 2rem;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : 'white')};
    transition: background-color 0.5s ease;
  `,
  CategorySelect: styled.select`
    margin: 1rem 0;
  `,
  PostGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
  `,
  Post: styled.div<BlogContainerProps>`
    border: 1px solid ${({ isDarkMode }) => (isDarkMode ? '#777' : '#ccc')};
    border-radius: 4px;
    padding: 1rem;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#444' : 'white')};
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
    transition: background-color 0.5s ease, color 0.5s ease, border 0.5s ease;
  `,
};
