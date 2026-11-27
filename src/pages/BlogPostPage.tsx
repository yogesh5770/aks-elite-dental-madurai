import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, 
  ArrowLeft, 
  Calendar, 
  User, 
  CheckCircle2, 
  Share2, 
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { BLOG_POSTS_DATA, SERVICES_ARCHITECTURE_DATA } from '../data/servicesArchitectureData';
import { CLINIC_DATA } from '../data/clinicData';

const SERVICE_LOCATION_URL_MAP: Record<string, string> = {
  'orthodontics': '/orthodontics-madurai/',
  'general-dentistry': '/general-dentistry-madurai/',
  'endodontics': '/root-canal-treatment-madurai/',
  'prosthodontics': '/prosthodontics-madurai/',
  'cosmetic-dentistry': '/cosmetic-dentistry-madurai/',
  'preventive-dentistry': '/preventive-dentistry-madurai/',
  'oral-maxillofacial-surgery': '/oral-maxillofacial-surgery-madurai/',
  'periodontics': '/periodontics-madurai/',
  'pediatric-dentistry': '/pediatric-dentistry-madurai/',
};

interface BlogPostPageProps {
  onOpenAppointment?: (treatmentTitle?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenAppointment }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS_DATA.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedService = SERVICES_ARCHITECTURE_DATA[post.relatedServiceSlug];
  const canonicalUrl = `https://www.aksdentalclinic.in/blog/${post.slug}${post.trailingSlash ? '/' : ''}`;

  // Schema.org MedicalWebPage / BlogPosting
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.aksdentalclinic.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.aksdentalclinic.in/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "headline": post.title,
        "description": post.seoDescription,
        "author": {
          "@type": "Physician",
          "name": "Dr. Khalidh Khan (BDS, MDS Orthodontics)",
          "medicalSpecialty": "Orthodontics and Dentofacial Orthopedics",
          "alumniOf": "Rajiv Gandhi University of Health Sciences"
        },
        "publisher": {
          "@type": "Dentist",
          "name": "AK's Elite Dental Clinic and Orthodontic Centre",
          "url": "https://www.aksdentalclinic.in/"
        },
        "datePublished": "2026-11-01",
        "dateModified": "2026-11-19"
      }
    ]
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen">
      {/* 0. SEO Meta */}
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        canonical={canonicalUrl}
        ogImage="https://www.aksdentalclinic.in/og/blog-og.jpg"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#061D15] via-[#0A3326] to-[#041710] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-emerald-300/80 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </nav>

          <div className="space-y-4">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200/80 pt-2 border-t border-emerald-800/80">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Key Takeaways Box */}
        <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-emerald-800" />
            <h2 className="text-base sm:text-lg font-bold font-serif text-emerald-950">
              Key Clinical Takeaways
            </h2>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-900/90">
            {post.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Paragraphs */}
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-8 mt-10 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 mr-2">Tags:</span>
          {post.tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        {/* Doctor Bio Card */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#061D15] to-[#0A3326] flex items-center justify-center text-amber-300 text-2xl font-bold font-serif shrink-0 border border-emerald-800">
            KK
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Author & Medical Reviewer</span>
            <h3 className="text-lg font-bold text-slate-900 font-serif">Dr. Khalidh Khan (BDS, MDS Orthodontics)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Specialist Orthodontist & Clinical Director at AK'S Elite Dental Clinic, K.Pudur, Madurai. Certified Invisalign provider, alumni of Rajiv Gandhi University of Health Sciences, with over 10,000+ patient treatments.
            </p>
          </div>
        </div>

        {/* Direct Link to Related Specialty */}
        {relatedService && (
          <div className="mt-10 p-6 bg-emerald-950 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
                Explore Treatment Specialty
              </span>
              <h3 className="text-base font-bold font-serif text-white">
                Learn More About {relatedService.name}
              </h3>
              <p className="text-xs text-emerald-200/80 mt-1">
                Detailed procedure steps, 3D technology, and patient cases in Madurai.
              </p>
            </div>
            <Link
              to={SERVICE_LOCATION_URL_MAP[relatedService.slug] || `/services/${relatedService.slug}`}
              className="px-5 py-2.5 bg-amber-400 text-emerald-950 text-xs font-bold rounded-xl hover:bg-amber-300 transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>View {relatedService.shortTitle}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Dental Guides</span>
          </Link>
        </div>

      </article>

    </div>
  );
};
