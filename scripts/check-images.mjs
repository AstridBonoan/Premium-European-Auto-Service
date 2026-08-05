import fs from 'fs';

const files = [
  'src/data/gallery.js',
  'src/data/brands.js',
  'src/data/company.js',
  'src/components/home/Hero.jsx',
];

const urls = new Set();
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/https:\/\/images\.unsplash\.com[^'"\s]+/g)) {
    urls.add(match[0]);
  }
}

const failures = [];
for (const url of urls) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (!res.ok) failures.push(`${res.status} ${url}`);
  } catch {
    failures.push(`ERR ${url}`);
  }
}

console.log(`Unique URLs: ${urls.size}`);
if (failures.length) {
  console.log(failures.join('\n'));
  process.exit(1);
}
console.log('ALL OK');
