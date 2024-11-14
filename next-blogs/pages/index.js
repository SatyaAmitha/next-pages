// File: pages/index.js
import Link from 'next/link';
import NavBar from '../components/NavBar';
import Head from 'next/head';
function HomePage() {
  console.log('[HomePage] render');
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
    <main>
      <h1>My Blog</h1>
    </main>
    </>
  );
}
export default HomePage;