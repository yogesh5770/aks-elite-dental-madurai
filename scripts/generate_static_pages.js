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
  // 1. Core Pages
  {
    targetFile: 'services.html',
    canonical: 'https://www.aksdentalclinic.in/services',
    title: "Invisalign & Aligner Specialist in Madurai | AK'S Elite Dental",
    description: "Top Invisalign specialist & orthodontist in Madurai. Transparent aligner treatment, braces clip cost, painless root canal & cleaning: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/services-og.jpg',
  },
  {
    targetFile: 'about.html',
    canonical: 'https://www.aksdentalclinic.in/about',
    title: "Best Orthodontist & Dental Specialist in Madurai | Dr KK",
    description: "Meet Dr. Khalidh Khan (MDS), top dental specialist & orthodontist in Madurai. Certified Invisalign provider with 1,000+ aligners. Call 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/about-og.jpg',
  },
  {
    targetFile: 'gallery.html',
    canonical: 'https://www.aksdentalclinic.in/gallery',
    title: "Invisalign & Braces Before After in Madurai | AK'S Dental",
    description: "Real patient results in Madurai: Invisalign, teeth aligners, braces clip treatment & smile makeovers by Dr. Khalidh Khan. View verified smile cases.",
    ogImage: 'https://www.aksdentalclinic.in/og/gallery-og.jpg',
  },
  {
    targetFile: 'contact.html',
    canonical: 'https://www.aksdentalclinic.in/contact',
    title: "Dental Clinic in Madurai Near Me | K.Pudur | AK'S Elite Dental",
    description: "Visit AK'S Elite Dental Clinic in K.Pudur, Madurai near Surya Nagar. Top dental hospital for emergency care, aligners & root canals: +91 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/contact-og.jpg',
  },
  {
    targetFile: 'blog.html',
    canonical: 'https://www.aksdentalclinic.in/blog',
    title: "Dental Health Guides & Patient Blog | AK'S Elite Dental",
    description: "Evidence-based dental care articles, aligner tips, root canal guides & recovery advice by Dr. Khalidh Khan (MDS) in Madurai: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/blog-og.jpg',
  },

  // 2. The 9 Dedicated Location-Targeted Pages in Madurai (SEO Team Official URLs)
  {
    targetFile: 'orthodontics-madurai.html',
    dirAlias: 'orthodontics-madurai/index.html',
    canonical: 'https://www.aksdentalclinic.in/orthodontics-madurai/',
    title: 'Orthodontic Treatment in Madurai | Braces & Aligners',
    description: 'Explore orthodontic treatment in Madurai, including metal, ceramic and self-ligating braces, clear aligners, Invisalign and growth modification options.',
    ogImage: 'https://www.aksdentalclinic.in/og/orthodontics-og.jpg',
  },
  {
    targetFile: 'general-dentistry-madurai.html',
    dirAlias: 'general-dentistry-madurai/index.html',
    canonical: 'https://www.aksdentalclinic.in/general-dentistry-madurai/',
    title: 'General Dentistry in Madurai | Cleaning, Fillings & Extraction',
    description: 'General dentistry in Madurai for routine dental examinations, scaling and teeth cleaning, tooth-coloured fillings and tooth extraction when needed.',
    ogImage: 'https://www.aksdentalclinic.in/og/general-dentistry-og.jpg',
  },
  {
    targetFile: 'root-canal-treatment-madurai.html',
    dirAlias: 'root-canal-treatment-madurai/index.html',
    canonical: 'https://www.aksdentalclinic.in/root-canal-treatment-madurai/',
    title: 'Root Canal Treatment in Madurai | RCT & Tooth Pain Care',
    description: 'Learn about root canal treatment in Madurai for teeth with inflamed or infected pulp, including assessment, treatment steps and restoration after RCT.',
    ogImage: 'https://www.aksdentalclinic.in/og/endodontics-og.jpg',
  },
  {
    targetFile: 'prosthodontics-madurai.html',
    dirAlias: 'prosthodontics-madurai/index.html',
    canonical: 'https://www.aksdentalclinic.in/prosthodontics-madurai/',
    title: 'Prosthodontics in Madurai | Implants, Crowns & Dentures',
    description: 'Explore prosthodontic care in Madurai, including dental implants, full-mouth implant options, ceramic and zirconia crowns, bridges and dentures.',
    ogImage: 'https://www.aksdentalclinic.in/og/prosthodontics-og.jpg',
  },
  {
    targetFile: 'cosmetic-dentistry-madurai.html',
    dirAlias: 'cosmetic-dentistry-madurai/index.html',
    canonical: 'https://www.aksdentalclinic.in/cosmetic-dentistry-madurai/',
    title: 'Cosmetic Dentistry in Madurai | Veneers, Whitening & Smile Design',
    description: 'Explore cosmetic dentistry in Madurai, including veneers, smile designing and teeth whitening, with treatment choices based on oral health and goals.',
    ogImage: 'https://www.aksdentalclinic.in/og/cosmetic-dentistry-og.jpg',
  },
  {
    targetFile: 'preventive-dentistry-madurai.html',
    dirAlias: 'preventive-dentistry-madurai/index.html',
    canonical: 'https://www.aksdentalclinic.in/preventive-dentistry-madurai/',
    title: 'Preventive Dentistry in Madurai | Check-ups, Fluoride & Sealants',
    description: 'Preventive dentistry in Madurai with routine dental check-ups, fluoride application and dental sealants to help reduce the risk of common dental problems.',
    ogImage: 'https://www.aksdentalclinic.in/og/preventive-dentistry-og.jpg',
  },
  {
    targetFile: 'oral-maxillofacial-surgery-madurai.html',
    dirAlias: 'oral-maxillofacial-surgery-madurai/index.html',
    canonical: 'https://www.aksdentalclinic.in/oral-maxillofacial-surgery-madurai/',
    title: 'Oral & Maxillofacial Surgery in Madurai | Wisdom Teeth & Trauma',
    description: 'Oral and maxillofacial surgery in Madurai for assessment of impacted wisdom teeth, wisdom tooth surgery and selected oral or facial trauma concerns.',
    ogImage: 'https://www.aksdentalclinic.in/og/oral-surgery-og.jpg',
  },
  {
    targetFile: 'pediatric-dentistry-madurai.html',
    dirAlias: 'pediatric-dentistry-madurai/index.html',
    canonical: 'https://www.aksdentalclinic.in/pediatric-dentistry-madurai/',
    title: "Pediatric Dentist in Madurai | Children's Dental Care & Fillings",
    description: "Children's dental care in Madurai, including dental check-ups, kids' teeth fillings and pulpotomy when clinically indicated.",
    ogImage: 'https://www.aksdentalclinic.in/og/pediatric-dentistry-og.jpg',
  },
  {
    targetFile: 'periodontics-madurai.html',
    dirAlias: 'periodontics-madurai/index.html',
    canonical: 'https://www.aksdentalclinic.in/periodontics-madurai/',
    title: 'Gum Treatment in Madurai | Periodontics & Gum Surgery',
    description: 'Periodontic care in Madurai for gum assessment, gum disease treatment, professional deep cleaning and gum surgery when clinically indicated.',
    ogImage: 'https://www.aksdentalclinic.in/og/periodontics-og.jpg',
  },

  // 3. Fallback Hierarchical Clinical Specialty Pages (/services/*)
  {
    targetFile: 'services/orthodontics.html',
    canonical: 'https://www.aksdentalclinic.in/services/orthodontics',
    title: "Orthodontist & Braces in Madurai | AK'S Elite Dental",
    description: "Top orthodontist in Madurai by Dr. Khalidh Khan (MDS). Metal, ceramic, Damon braces & certified Invisalign clear aligners: +91 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/orthodontics-og.jpg',
  },
  {
    targetFile: 'services/general-dentistry.html',
    canonical: 'https://www.aksdentalclinic.in/services/general-dentistry',
    title: "General Dental Clinic in Madurai | AK'S Elite Dental",
    description: "Gentle family dental care in K.Pudur, Madurai: ultrasonic teeth scaling, tooth-colored composite fillings & painless extractions: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/general-dentistry-og.jpg',
  },
  {
    targetFile: 'services/endodontics.html',
    canonical: 'https://www.aksdentalclinic.in/services/endodontics',
    title: "Root Canal Treatment (RCT) in Madurai | AK'S Dental",
    description: "Single-sitting painless root canal in Madurai by endodontic specialists. Rotary motorized cleaning & unbreakable Zirconia crowns: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/endodontics-og.jpg',
  },
  {
    targetFile: 'services/prosthodontics.html',
    canonical: 'https://www.aksdentalclinic.in/services/prosthodontics',
    title: "Dental Implants & Crowns in Madurai | AK'S Dental",
    description: "Permanent dental implants & full mouth implants in Madurai. Ceramic & Zirconia crowns, bridges and flexible dentures: +91 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/prosthodontics-og.jpg',
  },
  {
    targetFile: 'services/cosmetic-dentistry.html',
    canonical: 'https://www.aksdentalclinic.in/services/cosmetic-dentistry',
    title: "Cosmetic Dentistry & Veneers in Madurai | AK'S Dental",
    description: "Transform your smile in Madurai: porcelain veneers, digital smile designing (DSD) & 1-hour laser teeth whitening: +91 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/cosmetic-dentistry-og.jpg',
  },
  {
    targetFile: 'services/preventive-dentistry.html',
    canonical: 'https://www.aksdentalclinic.in/services/preventive-dentistry',
    title: "Preventive Dental Care in Madurai | AK'S Elite Dental",
    description: "Stop cavities before they start in Madurai: fluoride application, pit & fissure sealants and routine preventive dental checkups: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/preventive-dentistry-og.jpg',
  },
  {
    targetFile: 'services/oral-maxillofacial-surgery.html',
    canonical: 'https://www.aksdentalclinic.in/services/oral-maxillofacial-surgery',
    title: "Wisdom Tooth Surgery in Madurai | AK'S Elite Dental",
    description: "Painless wisdom tooth removal & maxillofacial trauma surgery in Madurai. 3D scan diagnosis & safe sterile operatory: +91 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/oral-surgery-og.jpg',
  },
  {
    targetFile: 'services/periodontics.html',
    canonical: 'https://www.aksdentalclinic.in/services/periodontics',
    title: "Gum Disease Treatment & Surgery in Madurai | AK'S",
    description: "Specialist gum care in Madurai: bleeding gums therapy, deep pocket scaling, flap surgery & bone grafting for loose teeth: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/periodontics-og.jpg',
  },
  {
    targetFile: 'services/pediatric-dentistry.html',
    canonical: 'https://www.aksdentalclinic.in/services/pediatric-dentistry',
    title: "Pediatric Dentist & Kids Dental Clinic in Madurai | AK'S",
    description: "Gentle children's dental care in Madurai: milk tooth pulpotomy, kids' cavity fillings, habit-breaking appliances & sealants: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/pediatric-dentistry-og.jpg',
  },

  // 4. Blog Posts
  {
    targetFile: 'blog/clear-aligners-vs-metal-braces-cost-madurai.html',
    canonical: 'https://www.aksdentalclinic.in/blog/clear-aligners-vs-metal-braces-cost-madurai',
    title: "Clear Aligners vs Braces Cost in Madurai | AK'S Dental",
    description: "Comparing clear aligners vs metal braces in Madurai. Cost breakdown, treatment timeline, comfort & results by Dr. Khalidh Khan (MDS): 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/blog-og.jpg',
  },
  {
    targetFile: 'blog/single-sitting-root-canal-pain-relief-facts.html',
    canonical: 'https://www.aksdentalclinic.in/blog/single-sitting-root-canal-pain-relief-facts',
    title: "Single-Sitting Root Canal Painless? | AK'S Dental Madurai",
    description: "Understand single-sitting root canal treatment in Madurai. Is it painful? How does rotary tech work? Complete clinical guide by Dr. KK: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/blog-og.jpg',
  },
  {
    targetFile: 'blog/dental-implants-full-mouth-restoration-guide.html',
    canonical: 'https://www.aksdentalclinic.in/blog/dental-implants-full-mouth-restoration-guide',
    title: "Full Mouth Dental Implants in Madurai | AK'S Elite Dental",
    description: "Complete guide to permanent dental implants & full mouth All-on-4 in Madurai. Procedure, bone requirements, cost & recovery: +91 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/blog-og.jpg',
  },
  {
    targetFile: 'blog/parents-guide-child-milk-teeth-care.html',
    canonical: 'https://www.aksdentalclinic.in/blog/parents-guide-child-milk-teeth-care',
    title: "Why Baby Teeth Matter: Parents Guide | AK'S Dental Madurai",
    description: "Why baby teeth are crucial for child speech, jaw growth & adult teeth alignment. Prevention & pulpotomy care by Dr. KK in Madurai: 95387 23872.",
    ogImage: 'https://www.aksdentalclinic.in/og/blog-og.jpg',
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
  const targetFilePath = path.join(distDir, p.targetFile);
  fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
  fs.writeFileSync(targetFilePath, pageHtml, 'utf8');
  console.log(`Generated static page: ${p.targetFile} (Canonical: ${p.canonical})`);

  // If a directory alias exists (e.g. `orthodontics-madurai/index.html`), write it too so `/route/` with trailing slash serves 200 directly
  if (p.dirAlias) {
    const dirAliasPath = path.join(distDir, p.dirAlias);
    fs.mkdirSync(path.dirname(dirAliasPath), { recursive: true });
    fs.writeFileSync(dirAliasPath, pageHtml, 'utf8');
    console.log(`Generated trailing-slash alias: ${p.dirAlias}`);
  }
}

console.log(`All ${pages.length} static sub-pages generated successfully!`);
