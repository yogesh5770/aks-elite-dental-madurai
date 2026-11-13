import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const baseHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

const pages = [
  {
    folder: 'services',
    canonical: 'https://www.aksdentalclinic.in/services',
    title: "Dental Treatments & Orthodontics in Madurai | AK'S Elite Dental",
    description: "Specialist treatments in K.Pudur, Madurai: 3D clear aligners, ceramic braces, single-sitting root canals & implants by Dr. Khalidh Khan (MDS).",
    ogImage: 'https://www.aksdentalclinic.in/real-cases/aks_8_disciplines_poster.jpg',
  },
  {
    folder: 'about',
    canonical: 'https://www.aksdentalclinic.in/about',
    title: "Dr. Khalidh Khan (MDS Orthodontist) | AK'S Elite Dental Madurai",
    description: "Meet Dr. Khalidh Khan (BDS, MDS Orthodontics) in K.Pudur, Madurai. iTero 3D intraoral scanner, Class-B sterilization, and personalized care.",
    ogImage: 'https://www.aksdentalclinic.in/clinic-photos/dr_khalidh_khan_suit.jpg',
  },
  {
    folder: 'gallery',
    canonical: 'https://www.aksdentalclinic.in/gallery',
    title: "Smile Transformations Before & After | AK'S Elite Dental Madurai",
    description: "Verified clinical before-and-after smile cases in Madurai: clear aligners, braces, ceramic root canals & tooth replacement results.",
    ogImage: 'https://www.aksdentalclinic.in/real-cases/cosmetic_smile_after.jpg',
  },
  {
    folder: 'contact',
    canonical: 'https://www.aksdentalclinic.in/contact',
    title: "Clinic Location & Appointments in K.Pudur | AK'S Elite Dental",
    description: "Visit AK'S Elite Dental Clinic at Alagar Complex, Surya Nagar Extn, K.Pudur, Madurai. Open Mon-Sat 9:30 AM-9 PM. Call +91 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/clinic-photos/aks_real_01.jpg',
  },
];

for (const p of pages) {
  let pageHtml = baseHtml;

  // Replace Canonical
  pageHtml = pageHtml.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${p.canonical}" />`
  );

  // Replace Title
  pageHtml = pageHtml.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${p.title}</title>`
  );

  // Replace Meta Title
  pageHtml = pageHtml.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="title" content="${p.title}" />`
  );

  // Replace Meta Description
  pageHtml = pageHtml.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${p.description}" />`
  );

  // Replace Open Graph Tags
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${p.title}" />`
  );

  pageHtml = pageHtml.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${p.description}" />`
  );

  pageHtml = pageHtml.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${p.canonical}" />`
  );

  pageHtml = pageHtml.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image" content="${p.ogImage}" />\n    <meta property="og:image:type" content="image/jpeg" />`
  );

  // Replace Schema.org clinic image so structured data audits see distinct image
  pageHtml = pageHtml.replace(
    /"image":\s*"https:\/\/www\.aksdentalclinic\.in\/hero-dental\.(webp|jpg)"/i,
    `"image": "${p.ogImage}"`
  );

  // Replace Twitter Card Tags
  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${p.title}" />`
  );

  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${p.description}" />`
  );

  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:image" content="${p.ogImage}" />`
  );

  // Flat `<route>.html` lets Cloudflare Pages serve `/route` directly (200),
  // matching the canonical URL without a trailing-slash 308 redirect.
  const targetFilePath = path.join(distDir, `${p.folder}.html`);
  fs.writeFileSync(targetFilePath, pageHtml, 'utf8');
  console.log(`Generated static page: ${p.folder}.html (Canonical: ${p.canonical})`);
}

console.log('All static sub-pages generated successfully!');

