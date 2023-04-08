import styled from 'styled-components';


export const StyledPost = {
  

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

    // ... (El resto del código)

    p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: ${({ isDarkMode }) => (isDarkMode ? '#0A0A0A' : '#0a0a0')};
      text-align: center;
    }

    img {
      max-width: 100%;
      border-radius: 15px;
      margin: 2rem 0;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    }
  `
};

export default StyledPost;