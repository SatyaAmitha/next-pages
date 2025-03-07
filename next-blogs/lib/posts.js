// lib/posts.js
import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getSlugs() {
  const suffix = '.md';
  const files = await readdir(`content/posts`); // Ensure this directory exists
  return files.filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length)); // Return slugs (filenames without `.md`)
}

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8'); // Read file content
  const { data: { date, title }, content } = matter(source); // Extract front matter and content
  const html = marked(content); // Convert markdown to HTML
  return { date, title, body: html };
}

export async function getPosts() {
  const slugs = await getSlugs(); // Get all slugs
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPost(slug); // Fetch post data
      return { slug, ...post }; // Include slug in each post
    })
  );
  return posts;
}
