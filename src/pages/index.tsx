import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog | Meu Blog</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Full-stack e esse é o meu blog!"
        />
      </Head>

      <Header />

      <main className="container mh-60"> </main>

      <Footer />
    </>
  );
}
