// pages/posts/first-post.js
import Head from 'next/head';
import { getPost } from '../../lib/posts';

export async function getStaticProps() {
  const post = await getPost('first-post');
  return {
    props: { post },
  };
}

function FirstPostPage({ post }) {
  return (
    <>
      <Head>
        <title>{`${post.title || 'Untitled'} - My Blog`}</title>
      </Head>
      <main>
        <h1>{post.title || 'Untitled'}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default FirstPostPage;