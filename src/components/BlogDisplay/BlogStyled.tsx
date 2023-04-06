import styled from 'styled-components';

export const Styled = {
  BlogContainer: styled.div`
    padding: 2rem;
  `,
  CategorySelect: styled.select`
    margin: 1rem 0;
  `,
  PostGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
  `,
  Post: styled.div`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
  `,
};
