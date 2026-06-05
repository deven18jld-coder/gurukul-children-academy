import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const OUTPUT_DIR = path.join(process.cwd(), 'src', 'generated');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'image-manifest.json');

function buildManifest(dir) {
  const result = {};
  
  if (!fs.existsSync(dir)) {
    return result;
  }
  
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  // Separate directories and files
  const directories = [];
  const files = [];
  
  for (const item of items) {
    if (item.isDirectory()) {
      directories.push(item);
    } else {
      files.push(item);
    }
  }
  
  // Sort alphabetically
  directories.sort((a, b) => a.name.localeCompare(b.name));
  files.sort((a, b) => a.name.localeCompare(b.name));
  
  // Process files (only images)
  const imageExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']);
  const images = [];
  
  for (const file of files) {
    const ext = path.extname(file.name).toLowerCase();
    if (imageExts.has(ext)) {
      const relPath = path.relative(IMAGES_DIR, path.join(dir, file.name)).replace(/\\/g, '/');
      const baseName = path.basename(file.name, ext);
      
      // Generate human-readable alt text from filename (e.g., smart-classroom-1 -> Smart classroom 1)
      const altText = baseName
        .split(/[-_]/)
        .filter(word => word.length > 0)
        .map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase())
        .join(' ');

      images.push({
        src: `/images/${relPath}`,
        name: baseName,
        alt: altText,
        caption: "", // Placeholder for future CMS caption support
        ext
      });
    }
  }
  
  // Build nested structure
  for (const subDir of directories) {
    const subManifest = buildManifest(path.join(dir, subDir.name));
    if (Object.keys(subManifest).length > 0 || (Array.isArray(subManifest) && subManifest.length > 0)) {
      result[subDir.name] = subManifest;
    }
  }
  
  if (images.length > 0) {
    if (Object.keys(result).length === 0) {
      return images;
    } else {
      result['_files'] = images;
    }
  }
  
  return result;
}

function generate() {
  console.log('Generating image manifest...');
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  const manifest = buildManifest(IMAGES_DIR);
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`✅ Image manifest generated at src/generated/image-manifest.json`);
}

generate();
