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
    title: "Invisalign & Aligner Specialist in Madurai | AK'S Elite Dental",
    description: "Top Invisalign specialist & orthodontist in Madurai. Transparent aligner treatment, braces clip cost, painless root canal & cleaning: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/services-og.jpg',
  },
  {
    folder: 'about',
    canonical: 'https://www.aksdentalclinic.in/about',
    title: "Best Orthodontist & Dental Specialist in Madurai | Dr KK",
    description: "Meet Dr. Khalidh Khan (MDS), top dental specialist & orthodontist in Madurai. Certified Invisalign provider with 1,000+ aligners. Call 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/about-og.jpg',
  },
  {
    folder: 'gallery',
    canonical: 'https://www.aksdentalclinic.in/gallery',
    title: "Invisalign & Braces Before After in Madurai | AK'S Dental",
    description: "Real patient results in Madurai: Invisalign, teeth aligners, braces clip treatment & smile makeovers by Dr. Khalidh Khan. View verified smile cases.",
    ogImage: 'https://www.aksdentalclinic.in/og/gallery-og.jpg',
  },
  {
    folder: 'contact',
    canonical: 'https://www.aksdentalclinic.in/contact',
    title: "Dental Clinic in Madurai Near Me | K.Pudur | AK'S Elite Dental",
    description: "Visit AK'S Elite Dental Clinic in K.Pudur, Madurai near Surya Nagar. Top dental hospital for emergency care, aligners & root canals: +91 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/contact-og.jpg',
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
    `<meta property="og:image" content="${p.ogImage}" />`
  );

  pageHtml = pageHtml.replace(
    /<meta\s+property="og:image:secure_url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image:secure_url" content="${p.ogImage}" />`
  );

  pageHtml = pageHtml.replace(
    /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image:alt" content="${p.title}" />`
  );

  // Replace Schema.org clinic image so structured data audits see distinct image
  pageHtml = pageHtml.replace(
    /"image":\s*"https:\/\/www\.aksdentalclinic\.in\/og\/home-og\.jpg"/i,
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

