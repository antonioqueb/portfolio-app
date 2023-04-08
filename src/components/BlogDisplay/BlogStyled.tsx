import styled from 'styled-components';


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
  `,
  Post: styled.div`
    background-color: #f2f2f2;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    h2 {
      margin-bottom: 1rem;
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }

    p {
      margin-bottom: 0.5rem;
      font-size: 16px;
      color: #333;
    }

    img {
      max-width: 100%;
      border-radius: 10px;
      margin-top: 1rem;
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

export default Styled;