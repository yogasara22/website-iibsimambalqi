export function formatDate(dateString) {
  if (!dateString) return '';
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  
  // Format tanggal dalam bahasa Indonesia
  return date.toLocaleDateString('id-ID', options);
}