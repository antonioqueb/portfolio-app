import styled from 'styled-components';

export const StyledPost = {
  BlogPostContainer: styled.div<{ loaded: boolean }>`
    max-width: 70%;
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
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 3px;
      text-align: center;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 0.9rem;
      color: dark;
      text-align: left ;
    }

    h4 {
      margin-top: 2.2rem;
      margin-bottom: 1.9rem;
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
      filter: brightness(0.35);
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

    .blog-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: dark;
      text-align: left;
    }
    .date {
      font-size: 1.3rem;
      font-weight: bold;
      color: #4a4a4a;
      background-color: #f0f0f0;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }
    
  `,
};

export default StyledPost;
