import fs from 'fs';
import { generateSitemap } from '../src/utils/generateSitemap.js';

const sitemap = generateSitemap();
fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');
