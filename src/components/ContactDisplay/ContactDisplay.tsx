import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import {Styles}  from '../ContactDisplay/ContactStyled';

interface ContactDisplayProps {
  className?: string;
}

interface StyledButtonProps {
    isDarkMode: boolean;
}




const ContactDisplay: React.FC<ContactDisplayProps> = ({ className }) => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <>
    <Styles.ContactFormWrapper id="contact" className={className} isDarkMode={isDarkMode}>
      <Styles.Heading isDarkMode={isDarkMode}>
        <strong style={{ fontSize: '2.5rem', fontWeight: 700 }}>CONTACT ME</strong>
      </Styles.Heading>
      <Styles.Form>
        <Styles.Label style={{ fontSize: '1.5rem', fontWeight: 400 }}
         isDarkMode
        htmlFor="name">Name:</Styles.Label>
        <Styles.Input type="text" required />
        <Styles.Label style={{ fontSize: '1.5rem', fontWeight: 400 }} isDarkMode htmlFor="email">Email:</Styles.Label>
        <Styles.Input type="email" id="email" name="email" required />
        <Styles.Label style={{ fontSize: '1.5rem', fontWeight: 400 }} isDarkMode htmlFor="message">Message:</Styles.Label>
        <Styles.TextArea id="message" name="message" required />
        <Styles.SubmitButton 
            type="submit"
            value="Submit"
            isDarkMode={isDarkMode}
        >
            Contact me now
        </Styles.SubmitButton>
      </Styles.Form>
    </Styles.ContactFormWrapper>

    <br/>
    <br/>
    </>
  );
};

export default ContactDisplay;
