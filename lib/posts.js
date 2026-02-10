import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Get all blog posts, sorted by date (newest first)
 */
export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || 'Untitled',
      date: data.date || '2025-01-01',
      excerpt: data.excerpt || '',
      categories: data.categories || [],
      featured: data.featured || false,
      image: data.image || null,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get a single blog post by its slug (filename without .md)
 */
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || 'Untitled',
    date: data.date || '2025-01-01',
    excerpt: data.excerpt || '',
    categories: data.categories || [],
    featured: data.featured || false,
    image: data.image || null,
  };
}

/**
 * Get only featured posts (for homepage carousel)
 */
export function getFeaturedPosts() {
  return getAllPosts().filter(p => p.featured);
}
