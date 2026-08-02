import React, { useState, useMemo } from 'react';
import { BookOpen, Clock, Tag, ArrowRight, Share2, Heart, Check, Code2, Sparkles, X, Search } from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import { Tilt3DCard } from './Tilt3DCard';
import { useLanguage } from '../context/LanguageContext';

/**
 * Calculates word count and estimated reading time (assuming ~200 words per minute)
 */
export const getReadingTimeStats = (content: string, excerpt: string = '') => {
  const fullText = `${excerpt} ${content}`.trim();
  const words = fullText ? fullText.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  const wordsPerMinute = 200;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return {
    wordCount,
    minutes,
    readTimeText: `${minutes} min`
  };
};

export const BlogSection: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(BLOG_POSTS.map((p) => isEn && p.categoryEn ? p.categoryEn : p.category)));
  }, [isEn]);

  // Filter blog posts based on searchQuery and selectedCategory
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const categoryText = isEn && post.categoryEn ? post.categoryEn : post.category;
      const titleText = isEn && post.titleEn ? post.titleEn : post.title;
      const excerptText = isEn && post.excerptEn ? post.excerptEn : post.excerpt;

      const matchesCategory = selectedCategory ? categoryText === selectedCategory : true;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesTitle = titleText.toLowerCase().includes(query);
      const matchesExcerpt = excerptText.toLowerCase().includes(query);
      const matchesCategoryText = categoryText.toLowerCase().includes(query);
      const matchesTags = post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && (matchesTitle || matchesExcerpt || matchesCategoryText || matchesTags);
    });
  }, [searchQuery, selectedCategory, isEn]);

  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>{isEn ? 'Tech Blog & Case Studies' : "Blog Tech & Retours d'Expérience"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? 'Articles & Technical Insights' : 'Articles & Synthèses Techniques'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {isEn
              ? 'Knowledge sharing on RAG architectures, Unity 3D development, and inclusive UI/UX design.'
              : 'Partage de connaissances sur les architectures RAG, le développement 3D Unity, et la conception UI/UX inclusive.'}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isEn
                  ? 'Search articles by title, tag, or keyword (e.g. RAG, Unity, UI/UX)...'
                  : 'Rechercher un article par titre, tag ou mot-clé (ex: RAG, Unity, UI/UX...)...'
              }
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-purple-500 text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                title={isEn ? 'Clear search' : 'Effacer la recherche'}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-xl border transition-colors ${
                selectedCategory === null
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-purple-500'
              }`}
            >
              {isEn ? 'All' : 'Tous'} ({BLOG_POSTS.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`px-3 py-1.5 rounded-xl border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-purple-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Empty Search Results State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 space-y-3 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 max-w-xl mx-auto">
            <Search className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Aucun article trouvé</h3>
            <p className="text-xs text-slate-500">
              Aucun résultat pour "{searchQuery}". Essayez d'autres mots-clés ou réinitialisez le filtre.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition-colors"
            >
              Réinitialiser la recherche
            </button>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const postTitle = isEn && post.titleEn ? post.titleEn : post.title;
            const postExcerpt = isEn && post.excerptEn ? post.excerptEn : post.excerpt;
            const postCategory = isEn && post.categoryEn ? post.categoryEn : post.category;
            const postDate = isEn && post.dateEn ? post.dateEn : post.date;
            const postContent = isEn && post.contentEn ? post.contentEn : post.content;

            const stats = getReadingTimeStats(postContent, postExcerpt);
            return (
              <Tilt3DCard key={post.id} className="h-full">
                <div
                  onClick={() => setActivePost(post)}
                  className="h-full p-7 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xl flex flex-col justify-between space-y-6 group cursor-pointer hover:border-purple-500/50 transition-colors"
                >
                  <div className="space-y-4">
                    
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold border border-purple-500/20">
                        {postCategory}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1" title={`${stats.wordCount} ${isEn ? 'words' : 'mots'}`}>
                        <Clock className="w-3.5 h-3.5 text-purple-500" />
                        <span>~{stats.readTimeText}</span>
                        <span className="text-[10px] text-slate-400">({stats.wordCount} {isEn ? 'words' : 'mots'})</span>
                      </span>
                    </div>

                    {/* Title & Excerpt */}
                    <div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors leading-snug">
                        {postTitle}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                        {postExcerpt}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium border border-slate-200 dark:border-slate-700">
                          #{tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Footer Author & Action */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                        FC
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900 dark:text-white">{post.author.name}</div>
                        <div className="text-[10px] text-slate-500">{postDate}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => toggleLike(post.id, e)}
                        className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${likedPosts[post.id] ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
                      </button>
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                        <span>{isEn ? 'Read' : 'Lire'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Full Article Reader Modal */}
        {activePost && (() => {
          const activeTitle = isEn && activePost.titleEn ? activePost.titleEn : activePost.title;
          const activeExcerpt = isEn && activePost.excerptEn ? activePost.excerptEn : activePost.excerpt;
          const activeCategory = isEn && activePost.categoryEn ? activePost.categoryEn : activePost.category;
          const activeDate = isEn && activePost.dateEn ? activePost.dateEn : activePost.date;
          const activeContent = isEn && activePost.contentEn ? activePost.contentEn : activePost.content;

          const activeStats = getReadingTimeStats(activeContent, activeExcerpt);
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
              <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto text-slate-900 dark:text-white">
                
                <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold">
                      {activeCategory}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">{activeTitle}</h2>
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2 flex-wrap">
                      <span>{isEn ? `By ${activePost.author.name}` : `Par ${activePost.author.name}`}</span>
                      <span>•</span>
                      <span>{activeDate}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        ~{activeStats.readTimeText} {isEn ? 'read time' : 'de lecture'} ({activeStats.wordCount} {isEn ? 'words' : 'mots'})
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActivePost(null)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Article Content */}
                <div className="prose dark:prose-invert max-w-none space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  <p className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg border-l-4 border-purple-500 pl-4 py-1 italic">
                    "{activeExcerpt}"
                  </p>

                  <div className="whitespace-pre-line">
                    {activeContent}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => toggleLike(activePost.id, e)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold"
                    >
                      <Heart className={`w-4 h-4 ${likedPosts[activePost.id] ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
                      <span>{isEn ? 'Like this article' : "J'aime cet article"}</span>
                    </button>
                  </div>
                  <button
                    onClick={() => setActivePost(null)}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700"
                  >
                    {isEn ? 'Close Article' : 'Fermer'}
                  </button>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
