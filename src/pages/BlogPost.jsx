import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { blogPosts } from '../data/portfolioData';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';
import { useEffect, useState } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [readProgress, setReadProgress] = useState(0);

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-primary dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Format content with markdown-style rendering
  const renderContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-serif font-bold text-primary dark:text-white mt-12 mb-6">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-serif font-bold text-primary dark:text-white mt-8 mb-4">
            {line.replace('### ', '')}
          </h3>
        );
      }

      // Bold text (**text**)
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {parts.map((part, i) =>
              i % 2 === 1 ? <strong key={i} className="font-bold text-primary dark:text-white">{part}</strong> : part
            )}
          </p>
        );
      }

      // List items
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 ml-6">
            {line.replace('- ', '')}
          </li>
        );
      }

      // Regular paragraphs
      if (line.trim() !== '') {
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {line}
          </p>
        );
      }

      return <br key={index} />;
    });
  };

  return (
    <>
      <SEO
        title={`${post.title} | Photography Journal`}
        description={post.excerpt}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <Motion.div
          className="h-full bg-accent"
          style={{ width: `${readProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="min-h-screen pt-24 pb-24 bg-[var(--surface)]">
        {/* Hero Image */}
        <Motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] mb-12 overflow-hidden"
        >
          <LazyImage
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 lg:px-12 pb-12">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 max-w-4xl">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-white/90 text-sm">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Motion.div>
            </div>
          </div>
        </Motion.div>

        {/* Article Content */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <button
                onClick={() => navigate('/blog')}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent transition-colors group"
              >
                <Motion.span
                  className="text-xl"
                  whileHover={{ x: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  ←
                </Motion.span>
                Back to Blog
              </button>
            </Motion.div>

            {/* Article Body */}
            <Motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="prose prose-lg dark:prose-invert max-w-none mb-16"
            >
              <div className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12 font-serif italic border-l-4 border-accent pl-6">
                {post.excerpt}
              </div>

              {renderContent(post.content)}
            </Motion.article>

            {/* Image Gallery */}
            {post.images && post.images.length > 0 && (
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mb-8">
                  Featured Images
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {post.images.map((image, index) => (
                    <Motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl cursor-pointer group"
                    >
                      <LazyImage
                        src={image}
                        alt={`${post.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </Motion.div>
                  ))}
                </div>
              </Motion.div>
            )}

            {/* Author Card */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-8 mb-16"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-3xl flex-shrink-0">
                  📸
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mb-2">
                    {post.author}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Professional photographer with over 8 years of experience capturing moments that matter.
                    Specializing in wedding, portrait, and travel photography with a passion for storytelling through imagery.
                  </p>
                </div>
              </div>
            </Motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-serif font-bold text-primary dark:text-white mb-8">
                  Related Articles
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <Motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="group block"
                      >
                        <Motion.div
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <LazyImage
                              src={relatedPost.coverImage}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <span className="absolute top-3 right-3 px-2 py-1 bg-accent text-white rounded-full text-xs font-semibold">
                              {relatedPost.category}
                            </span>
                          </div>
                          <div className="p-4">
                            <h4 className="font-serif font-bold text-primary dark:text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                          </div>
                        </Motion.div>
                      </Link>
                    </Motion.div>
                  ))}
                </div>
              </Motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
