import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content', 'news');

export function getAllPosts() {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn('News directory not found, creating empty array');
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const matterResult = matter(fileContents);

          return {
            slug,
            title: matterResult.data.title || 'Untitled',
            date: matterResult.data.date || new Date().toISOString(),
            excerpt: matterResult.data.excerpt || '',
            ...matterResult.data,
          };
        } catch (error) {
          console.error(`Error processing ${fileName}:`, error);
          return null;
        }
      })
      .filter(Boolean) // Remove null entries
      .sort((a, b) => (a.date < b.date ? 1 : -1));

    return allPostsData;
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      console.warn(`Post not found: ${slug}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Process markdown content to HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      content: contentHtml,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      ...matterResult.data,
    };
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error);
    return null;
  }
}