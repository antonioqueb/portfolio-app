import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  bgColor: string;
  isDarkMode: boolean;
}

interface PProps {
  isDarkMode: boolean;
}

const Footer = styled.footer<FooterProps>`
  background-color: ${({ bgColor, isDarkMode }) =>
    isDarkMode ? '#1C1C1C' : bgColor};
  border-radius: 6px;
  border: none;
  color: white;
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.15);
`;

const Section = styled.div<PProps>`
  color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#1C1C1C')};
  font-size: 1.2rem;
  margin: 0;
  padding: 1.3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
`;

const Icon = styled.button<PProps>`
  color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#1C1C1C')};
  background: none;
  border: none;
  font-size: 1.8rem;
  margin-right: 0.6rem;
  display: flex;
  aling-items: flex-start;
  cursor: pointer;

  &:hover {
    color: ${({ isDarkMode }) => (isDarkMode ? '#CCCCCC' : '#fffff')};
  }

  &:focus {
    outline: none;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: space-between;
  margin-bottom: 0.5rem;
`;

const Link = styled.a<PProps>`
  color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#1C1C1C')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterDisplay: React.FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/antonio-queb-aab85324b/', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/antonioqueb', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/antonioqueb_', '_blank');
  };

  return (
    <Footer bgColor={isDarkMode ? '#1C1C1C' : '#FFFFFF'} isDarkMode={isDarkMode}>
      <Section isDarkMode={isDarkMode}>
        <div>
          <h3>Contact Me</h3>
          <List>
            <ListItem>
              <i className="bi bi-telephone-fill"></i>
              <span>981-177-6800</span>
            </ListItem>
            <ListItem>
              <i className="bi bi-envelope-fill"></i>
              <span>hello@queb.online</span>
            </ListItem>
            <ListItem>
              <i className="bi bi-geo-alt-fill"></i>
              <span>Las Américas, Mérida</span>
            </ListItem>
          </List>
        </div>
      </Section>
      <Section isDarkMode={isDarkMode}>
        <div>
          <h3>Find Me Online</h3>
          <List>
            <ListItem>
              <Link href="https://www.linkedin.com/in/antonio-queb-aab85324b/" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
                <Icon isDarkMode={isDarkMode} onClick={handleLinkedinClick}>
                  <FaLinkedin />
                </Icon>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/antonioqueb" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
                <Icon isDarkMode={isDarkMode} onClick={handleGithubClick}>
                  <FaGithub />
                </Icon>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/antonioqueb_" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
                <Icon isDarkMode={isDarkMode} onClick={handleTwitterClick}>
                  <FaTwitter />
                </Icon>
              </Link>
            </ListItem>
          </List>
        </div>
      </Section>
      <Section isDarkMode={isDarkMode}>
        <div>
          <h3>About Me</h3>
          <p>
            Hi, I'm Antonio, a data-driven Full-Stack Developer. Let's build something amazing together!{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
            <span role="img" aria-label="computer">
              💻
            </span>
            <span role="img" aria-label="magnifying glass">
              🔍
            </span>
          </p>
        </div>
      </Section>
    </Footer>
  );
};

export default FooterDisplay;
  