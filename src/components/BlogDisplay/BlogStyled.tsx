import styled from 'styled-components';


export const StyledBlog = {
  
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
      width: 100%;      /* Establece el ancho de la imagen al 100% del contenedor */
      height: 300px;    /* Establece una altura fija para la imagen */
      object-fit: cover;/* Asegura que la imagen cubra el área sin deformarse ni desbordarse */
      border-radius: 19px;
      margin: 2rem 0;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    }
    
  `
};

export default StyledBlog;