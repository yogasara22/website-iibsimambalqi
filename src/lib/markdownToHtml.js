import { remark } from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown) {
  // Proses markdown ke HTML
  const result = await remark().use(html).process(markdown);
  let content = result.toString();
  
  // Tambahkan ID pada heading untuk table of contents
  let index = 0;
  content = content.replace(/<h2[^>]*>(.*?)<\/h2>/g, (match, title) => {
    index++;
    return `<h2 id="section-${index}">${title}</h2>`;
  });
  
  return content;
}