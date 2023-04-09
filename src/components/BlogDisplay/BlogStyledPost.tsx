import styled from 'styled-components';

export const StyledPost = {
  BlogPostContainer: styled.div<{ loaded: boolean }>`
    max-width: 80%;
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

    p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: dark;
      text-align: start;
    }

    .bold-text {
      font-weight: bold;
    }

    .post-image-container {
      position: relative;
      width: 100%;
      height: 350px;
      overflow: hidden;
      border-radius: 19px;
      margin: 2rem 0;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    }

    .post-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.7);
      transition: filter 500ms;
    }

    .post-image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(5px);
      color: white;
      text-align: center;
    }

    .author-info {
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 0.5rem;
    }
  `,
};

export default StyledPost;
