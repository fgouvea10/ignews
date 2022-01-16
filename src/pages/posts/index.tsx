import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Container, Wrapper } from 'styles/posts';


export default function Home() {

  return (
    <>
      <Head>
        <title>Posts - ig.news</title>
        <meta
          name="description"
          content="See all ignews posts!."
        />
      </Head>

      <Container>
        <Wrapper>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creatubg a Monorepo with Learna & Yarn Workspaces</strong>
            <p>in this guide, you will learn how to create a monorepo to manage multiple packages with...</p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creatubg a Monorepo with Learna & Yarn Workspaces</strong>
            <p>in this guide, you will learn how to create a monorepo to manage multiple packages with...</p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creatubg a Monorepo with Learna & Yarn Workspaces</strong>
            <p>in this guide, you will learn how to create a monorepo to manage multiple packages with...</p>
          </a>
        </Wrapper>
      </Container>
    </>
  );
}

