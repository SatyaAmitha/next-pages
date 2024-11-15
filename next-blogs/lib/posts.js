// lib/posts.js
import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8');
  const { data: { date, title }, content } = matter(source);
  const html = marked(source);
  return { date, title, body:html };
}