// lib/posts.js
import { readdir,readFile } from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
export async function getSlugs() {
  const suffix = '.md';
  const files = await readdir(`content/posts`);
  return files.filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}
export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8');
  const { data: { date, title }, content } = matter(source);
  const html = marked(source);
  return { date, title, body:html };
}