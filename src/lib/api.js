import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentDirectory = join(process.cwd(), 'src/content');

export function getContentBySlug(type, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(contentDirectory, type, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllContent(type, fields = []) {
  const directory = join(contentDirectory, type);
  const slugs = fs.readdirSync(directory);
  const contents = slugs
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => getContentBySlug(type, slug, fields))
    // Sort by date in descending order
    .sort((content1, content2) => (content1.date > content2.date ? -1 : 1));
  return contents;
}