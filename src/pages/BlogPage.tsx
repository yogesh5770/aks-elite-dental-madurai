import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Tag, 
  Calendar, 
  User, 
  Sparkles, 
  Search,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { BLOG_POSTS_DATA, BlogPost } from '../data/servicesArchitectureData';
import { CLINIC_DATA } from '../data/clinicData';

interface BlogPageProps {
  onOpenAppointment?: (treatmentTitle?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenAppointment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Orthodontics', 'Endodontics', 'Prosthodontics', 'Pediatric Dentistry'];

  const filteredPosts = BLOG_POSTS_DATA.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen">
      {/* 0. SEO Meta Tags */}
      <SEO
        title="Dental Health Blog & Oral Care Tips | AK’s Elite Dental"
        description="Explore dental health articles from AK’s Elite Dental, covering braces, 
clear aligners, root canal treatment, dental implants and children’s oral care."
        canonical="https://www.aksdentalclinic.in/blog"
        ogImage="https://www.aksdentalclinic.in/og/blog-og.jpg"
      />

      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#061D15] to-[#0A3326] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-300/80 mb-4 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">Patient Education & Blog</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Evidence-Based Patient Knowledge
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
              Dental Health Guides & Expert Articles
            </h1>
            <p className="mt-4 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Written and medically reviewed by Dr. Khalidh Khan (MDS Orthodontics). Transparent guides on dental treatments, cost factors, post-operative care, and modern aligner technology in Madurai.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics, aligners, RCT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

        </div>
      </section>

      {/* 3. Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all p-7 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80 uppercase tracking-wider text-[10px]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-emerald-800 transition-colors mb-3 leading-snug">
                    <Link to={`/blog/${post.slug}${post.trailingSlash ? '/' : ''}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>

                  <div className="space-y-1.5 border-t border-slate-100 pt-4 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-2">
                      Key Highlights:
                    </span>
                    {post.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    By {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.slug}${post.trailingSlash ? '/' : ''}`}
                    className="text-xs font-bold text-emerald-800 group-hover:text-emerald-950 inline-flex items-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No articles found</h3>
            <p className="text-xs text-slate-500 mt-1">Try searching with a different keyword or reset filters.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-emerald-900 text-white rounded-lg text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Consultation CTA */}
      <section className="bg-gradient-to-r from-[#061D15] via-[#0A3326] to-[#061D15] text-white py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-serif">Have a Specific Dental Question?</h2>
          <p className="text-xs sm:text-sm text-emerald-100/90">
            Speak directly with Dr. Khalidh Khan (MDS) at AK'S Elite Dental Clinic in K.Pudur, Madurai.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            {onOpenAppointment && (
              <button
                onClick={() => onOpenAppointment()}
                className="px-6 py-2.5 bg-amber-400 text-emerald-950 font-bold text-xs rounded-xl hover:bg-amber-300"
              >
                Book Consultation
              </button>
            )}
            <a
              href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
              className="px-5 py-2.5 bg-emerald-900 text-white font-semibold text-xs rounded-xl hover:bg-emerald-800 border border-emerald-700"
            >
              Call Clinic
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
