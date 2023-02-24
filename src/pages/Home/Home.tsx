import React from 'react';
import NavbarDisplay from '../../components/NavbarDisplay/NavbarDisplay';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';
import { useAppSelector } from '../../app/hooks';
import { selectPosts } from '../../reducers/blog/blogSlice';

const Home: React.FC = () => {
  const posts = useAppSelector(selectPosts);

  const firstPost = posts[0];
  const title = firstPost ? firstPost.title : 'El mundo de la programación';
  const date = firstPost ? firstPost.date : '2021-01-01';
  const content = firstPost ? firstPost.content : 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';
  const tags = firstPost ? firstPost.tags : ['Python', 'React', 'Typescript', 'node.js'];
  return (
    <div>
      <NavbarDisplay />
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{content}</p>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <FooterDisplay />
    </div>
  );
};

export default Home;
