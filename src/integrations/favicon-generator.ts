import type { AstroIntegration } from 'astro';
import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs/promises';

export default function faviconGenerator(): AstroIntegration {
  return {
    name: 'favicon-generator',
    hooks: {
      'astro:config:setup': async () => {
        // Run only on build or dev start
        const sourceFile = path.join(process.cwd(), 'src/assets/hmc.png');
        const publicDir = path.join(process.cwd(), 'public');

        try {
          await fs.access(sourceFile);
        } catch {
          console.warn('Source image for favicon not found:', sourceFile);
          return;
        }

        // Ensure public dir exists
        await fs.mkdir(publicDir, { recursive: true });

        console.log('✨ Generating favicons from src/assets/hmc.png...');

        const sharpStream = sharp(sourceFile);

        // 1. favicon-16x16.png
        await sharpStream
          .clone()
          .resize(16, 16)
          .toFile(path.join(publicDir, 'favicon-16x16.png'));

        // 2. favicon-32x32.png
        await sharpStream
          .clone()
          .resize(32, 32)
          .toFile(path.join(publicDir, 'favicon-32x32.png'));

        // 3. apple-touch-icon.png (180x180)
        await sharpStream
          .clone()
          .resize(180, 180)
          .toFile(path.join(publicDir, 'apple-touch-icon.png'));

        // 4. android-chrome-192x192.png
        await sharpStream
          .clone()
          .resize(192, 192)
          .toFile(path.join(publicDir, 'android-chrome-192x192.png'));

        // 5. android-chrome-512x512.png
        await sharpStream
          .clone()
          .resize(512, 512)
          .toFile(path.join(publicDir, 'android-chrome-512x512.png'));

        // 6. favicon.ico (Legacy) - Just use 32px png renamed, OR better: use sharp to output raw buffer and write?
        // Sharp doesn't output .ico natively easily.
        // We will just copy the 32x32.png logic but if we want true .ico it's harder.
        // For now, browsers handle PNG-in-ICA-extension or just use the PNGs if declared in HTML.
        // Let's create a 32x32 png at favicon.ico for fallback.
        await sharpStream
          .clone()
          .resize(32, 32)
          .toFile(path.join(publicDir, 'favicon.ico'));

        console.log('✅ Favicons generated successfully!');
      },
      'astro:build:start': async () => {
        // Also run on build start to be sure
      }
    },
  };
}
