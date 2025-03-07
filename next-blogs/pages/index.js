// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

// Fetch posts at build time
export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

// Render the Home page with dynamic post links
function HomePage({ posts }) {
  console.log('[HomePage] render:', posts);
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;