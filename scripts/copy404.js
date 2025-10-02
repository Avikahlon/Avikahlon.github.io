import { copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// copies dist/index.html to dist/404.html so GitHub Pages serves the SPA properly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distIndex = join(process.cwd(), 'dist', 'index.html');
const dist404 = join(process.cwd(), 'dist', '404.html');

try {
  copyFileSync(distIndex, dist404);
  console.log('Copied', distIndex, 'to', dist404);
} catch (err) {
  console.error('Failed to copy index.html to 404.html:', err.message);
  process.exit(1);
}
