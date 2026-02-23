/**
 * IMAGE COMPRESSION SCRIPT
 * 
 * Run this whenever new project images are added to /src/assets/projects/ to generate optimized WebP versions for better performance.
 * 
 * Usage:
 *   node compress-images.js
 * 
 * What it does:
 *   - Reads all .png files from /src/assets/projects/
 *   - Resizes to max 1920px width
 *   - Converts to WebP format (80% quality)
 *   - Saves to /src/assets/projects-optimized/
 */


import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputDir = path.join(__dirname, 'src/assets/projects')
const outputDir = path.join(__dirname, 'src/assets/projects-optimized')

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.png')) {
    console.log(`Compressing ${file}...`)
    sharp(path.join(inputDir, file))
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, file.replace('.png', '.webp')))
      .then(() => console.log(`✓ ${file} → ${file.replace('.png', '.webp')}`))
      .catch(err => console.error(`✗ Error with ${file}:`, err))
  }
})