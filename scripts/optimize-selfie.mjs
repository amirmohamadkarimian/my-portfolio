import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');
const src = path.join(__dirname, '../assets/selfie-source.png');

if (!fs.existsSync(src)) {
  console.error('Missing assets/selfie-source.png — add your source photo there first.');
  process.exit(1);
}

const SIZES = [320, 640];
const resizeOpts = { fit: 'cover', position: 'top' };

for (const size of SIZES) {
  const base = sharp(src).resize(size, size, resizeOpts);

  await base
    .clone()
    .webp({ quality: 82, effort: 4 })
    .toFile(path.join(publicDir, `selfie-${size}.webp`));

  await base
    .clone()
    .avif({ quality: 62, effort: 4 })
    .toFile(path.join(publicDir, `selfie-${size}.avif`));
}

// JPEG fallback for browsers without AVIF/WebP (~30 KB vs 646 KB true PNG)
const jpgOut = path.join(publicDir, 'selfie.jpg');
await sharp(src)
  .resize(640, 640, resizeOpts)
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(jpgOut);

const files = ['selfie.jpg', ...SIZES.flatMap((s) => [`selfie-${s}.webp`, `selfie-${s}.avif`])];
for (const file of files) {
  const kb = (fs.statSync(path.join(publicDir, file)).size / 1024).toFixed(1);
  console.log(`${file}: ${kb} KB`);
}
