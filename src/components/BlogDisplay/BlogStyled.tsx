
import styled from 'styled-components';


export const StyledBlog = {
  
  BlogContainer: styled.div<{ isDarkMode?: boolean }>`
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Poppins';
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
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
  PostGrid: styled.div<{ isDarkMode?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
`,
  PostTitle: styled.h3<>`
  && {
    font-size: 14px;
  }
  `,

  Post: styled.div<{ isDarkMode?: boolean }>`
   background-color:  ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
   padding: 1rem;
   border-radius: 10px;
   box-shadow: ${({ isDarkMode }) => (isDarkMode ? '2px 2px 5px rgba(255, 255, 255, 0.3)' : '2px 2px 5px rgba(0, 0, 0, 0.3)')};

    h3 { 
      margin-bottom: 0.5rem;
      font-size: 13px; // Ajusta el tamaño de la fuente aquí
      font-weight: bold;
      color:  ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
  }

    p {
      margin-bottom: 0.5rem;
      font-size: 16px;
      color:  ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
    }

    button {
      color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
    }

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 19px;
      margin: 2rem 0;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    }
  
`,
  

  ReadMoreButton: styled.button<{ isDarkMode?: boolean }>`
    margin-left: 0;
    margin-right: auto;
    display: block;
    justify-content: start;
    align-items: start;
    width: 9.75rem;
    height: 2.3rem;
    background-size: 300% 300%;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%,#FE53BB 45%, #8F51EA 67%, #0044ff 87%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
    text-decoration: none;
    color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff !important' : '#ffffff !important')};



    strong {
      z-index: 2;
      font-size: 12px;
      letter-spacing: 5px;
      color: white;
      text-decoration: none;
      position: relative;
  }

  strong::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s ease-out;
      color: white;

  }

  strong:hover::after {
      transform: scaleX(1);
  }

  #container-stars {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      transition: 0.5s;
      backdrop-filter: blur(1rem);
      border-radius: 5rem;
      color: white;

  }

  #glow {
      position: absolute;
      display: flex;
      width: 12rem;

      .circle {
      width: 100%;
      height: 30px;
      filter: blur(2rem);
      animation: pulse_3011 4s infinite;
      z-index: -1;
      }

      .circle:nth-of-type(1) {
      background: rgba(254, 83, 186, 0.636);
      }

      .circle:nth-of-type(2) {
      background: rgba(142, 81, 234, 0.704);
      }
  }

  &:hover #container-stars {
      z-index: 1;
      background-color: #ffffff;
      color: #ffffff;

  }

  &:hover {
      transform: scale(1.2);
      color: #ffffff;
  }

  &:active {
      border: double 4px #FE53BB;
      background-origin: border-box;
      background-clip: content-box, border-box;
      animation: none;
      color: white;

      .circle {
      background: #FE53BB;
      }
  }

  #stars {
      position: relative;
      background: transparent;
      width: 200rem;
      height: 200rem;

      &::after {
      content: "";
      position: absolute;
      top: -10rem;
      left: -100rem;
      width: 100%;
      height: 100%;
      animation: animStarRotate 90s linear infinite;
      background-image: radial-gradient(#ffffff 1px, transparent 1%);
      background-size: 50px 50px;
      color: white;
      }

      &::before {
      content: "";
      position:
      absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
  color: #ffffff;
  }
  }

  @keyframes animStar {
  from {
      transform: translateY(0);
  }
  to {
      transform: translateY(-135rem);
  }

  }

  @keyframes animStarRotate {
  from {
      transform: rotate(360deg);
  }

  to {
      transform: rotate(0);
  }
  }

  @keyframes gradient_301 {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }

  100% {
      background-position: 0% 50%;
  }
  }

  @keyframes pulse_3011 {
  0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
  `,

};

export default StyledBlog;


