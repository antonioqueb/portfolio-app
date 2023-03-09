import styled from 'styled-components';

interface FooterProps {
  bgColor: string;
  isDarkMode: boolean;
}

interface PProps {
  isDarkMode: boolean;
}

export const Styled = {
  Footer: styled.footer<{ bgColor: string }>`
    background-color: ${({ bgColor }) => bgColor};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Section: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 1rem;
  `,
  List: styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  `,
  ListItem: styled.li`
    margin-right: 2rem;
    text-align: center;
  `,
  Link: styled.a<{ isDarkMode: boolean }>`
    color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#000000')};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    text-align: center;
    display: block;
    margin: 1rem 0;

    &:hover {
      color: ${({ isDarkMode }) => (isDarkMode ? '#CCCCCC' : '#999999')};
    }
  `,
  Icon: styled.button<{ isDarkMode: boolean }>`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#000000')};
    transition: color 0.2s ease-in-out;
    font-size: 2rem;

    &:hover {
      color: ${({ isDarkMode }) => (isDarkMode ? '#CCCCCC' : '#999999')};
    }
  `,
  Div: styled.div<{ isDarkMode: boolean }>`
    color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#000000')};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    text-align: center;

    p {
      margin: 0;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  `,
};
