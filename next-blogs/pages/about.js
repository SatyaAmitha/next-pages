// File: pages/about.js
import Head from 'next/head';

function AboutPage() {
  console.log('[AboutPage] render');
  return (
    <>
      <Head>
        <title>About - My Blog</title>
        <meta name="description" content="Learn more about us on our About page." />
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}

export default AboutPage;