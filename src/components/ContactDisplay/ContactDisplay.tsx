import { useForm, ValidationError } from '@formspree/react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import { ContactFormWrapper, Heading, Form, Label, Input, TextArea, SubmitButton, Container, FormContainer } from '../ContactDisplay/ContactStyled';
import React, { useState } from 'react';

interface ContactFormProps {
  className?: string;
}

interface StyledButtonProps {
  isDarkMode: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [state, handleSubmit] = useForm('xeqwlygy');
  const isDarkMode = useSelector(selectIsDarkMode);
  const [submitted, setSubmitted] = useState(false);
  const [showMessageBubble, setShowMessageBubble] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    const result = await handleSubmit(event);

    if (result.status === 200) {
      setSubmitted(true);
      setShowMessageBubble(true);
      setTimeout(() => {
        setShowMessageBubble(false);
      }, 7000);
    }
  };

  return (
    <Container id='contact'>
      <FormContainer>
        <ContactFormWrapper isDarkMode={isDarkMode} className={className}>
          <Heading isDarkMode={isDarkMode}>
            <strong style={{ fontWeight: 600 }}>Do you have any questions?</strong>
          </Heading>
          <Form id="contact-form" onSubmit={onSubmit}>
            <Label isDarkMode={isDarkMode} style={{ fontSize: '1.5rem', fontWeight: 400 }} htmlFor="name">
              Name:
            </Label>
            <Input id="name" type="text" name="name" required isDarkMode={isDarkMode} />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <Label isDarkMode={isDarkMode} style={{  fontWeight: 400 }} htmlFor="email">
              Email:
            </Label>
            <Input id="email" type="email" name="email" required isDarkMode={isDarkMode} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <Label isDarkMode={isDarkMode} style={{ fontWeight: 400 }} htmlFor="message">
              Message:
            </Label>
            <TextArea id="message" name="message" required isDarkMode={isDarkMode} />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <SubmitButton isDarkMode={isDarkMode} type="submit" disabled={state.submitting || submitted}>
            <a href="#">
              <strong>Send</strong>
            </a>
            <div id="container-stars">
              <div id="glow">
                <div className="circle" />
                <div className="circle" />
              </div>
              <div id="stars" />
            </div>
          </SubmitButton>

          </Form>
          {submitted && showMessageBubble && (
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'green',
                borderRadius: '25px',
                padding: '10px 20px',
                textAlign: 'center',
                color: 'white',
                marginBottom: '10px',
              }}
            >
              <p>
                Thank you for your message! I will get back to you soon.
              </p>
            </div>
          )}
        </ContactFormWrapper>
        {state.submitting && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
            color: 'white',
            zIndex: '999',
          }}
        >
          <h2>Message sent successfully</h2>
        </div>
      )}

      </FormContainer>
    </Container>
  );
};  

export default ContactForm