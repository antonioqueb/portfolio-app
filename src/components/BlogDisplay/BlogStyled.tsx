export const Styled = {
  BlogContainer: styled.div<{ isDarkMode?: boolean }>`
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Poppins';
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#fff')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#333')};
    padding: 2rem;
    border-radius: 15px;
  `,
  CategorySelect: styled.select`
    padding: 10px 15px;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    background-color: #f2f2f2;
    font-family: 'Poppins';
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      background-color: #e1e1e1;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 5px #c3c3c3;
    }
  `,
  PostGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
  Post: styled.div`
    background-color: #fff;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
    }

    h3 {
      margin-bottom: 1rem;
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }

    p {
      margin-bottom: 0.5rem;
      font-size: 16px;
      color: #666;
    }

    img {
      max-width: 100%;
      border-radius: 15px;
      margin-top: 1rem;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    }
  `,
  BlogPostContainer: styled.div<{ isDarkMode?: boolean; loaded: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transform: ${({ loaded }) => (loaded ? 'translateY(0)' : 'translateY(-20px)')};
  transition: opacity 500ms, transform 500ms;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #ff8c00;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
  }

  .post-content {
    max-width: 800px;
    width: 100%;
    font-size: 1.2rem;
    color: ${({ isDarkMode }) => (isDarkMode ? '#0A0A0A' : '#0a0a0')};
    line-height: 1.5;
    text-align: justify;

    h2 {
      font-size: 2rem;
      margin: 2rem 0 1rem 0;
      color: #333;
      text-align: center;
    }

    p {
      margin-bottom: 1rem;
    }

    ul,
    ol {
      margin-left: 2rem;
      margin-bottom: 1rem;

      li {
        margin-bottom: 0.5rem;
      }
    }

    img {
      max-width: 100%;
      border-radius: 15px;
      margin: 2rem 0;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    }
  }

  .post-meta {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    color: ${({ isDarkMode }) => (isDarkMode ? '#0A0A0A' : '#0a0a0')};

    p {
      margin-bottom: 0.5rem;
    }

    .category {
      font-weight: bold;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    .date {
      font-style: italic;
    }
  }
`
}
