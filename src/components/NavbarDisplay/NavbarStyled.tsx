import styled from "styled-components";



interface HeaderProps {
    bgColor: string;
    isDarkMode: boolean;
  }
  
export const Styled = {  
  Header : styled.header<HeaderProps>`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');
    box-sizing: border-box;
    font-family: 'Poppins';
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ bgColor, isDarkMode }) => isDarkMode ? '#1C1C1C' : bgColor};
    padding: 1.3rem;
    font-size: 1.28rem;
    text-decoration: none;
    width: 100%;

  
    a {
      color: ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#333'};
      text-decoration: none;
    }
  
    label {
      color: ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#333'};
    }
  `,
  
  Nav : styled.nav`
    ul {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
      text-decoration: none;
      width: 100%;


    }
  
    li {
      font-family: 'Poppins';
      margin-right: 4.9rem;
      text-decoration: none;
    }
:
    a {
      font-family: 'Poppins';
      text-decoration: none;
      transition: font-size 0.19s ease-out;
      text-decoration: none;

    }
  
    a:hover {
      font-size: 1.08em;
    }
  `,
  
  Logo : styled.img`
    width: 100px;
    cursor: pointer;
  
    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
  `,
  
  SwitchWrapper : styled.div`
    display: flex;
    align-items: center;
  `,
  
  SwitchLabel : styled.label`
    font-family: 'Poppins';
    margin-right: 0.5rem;
  `,

}