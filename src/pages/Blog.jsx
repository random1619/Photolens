import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../data/portfolioData';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Card animation variants with more dramatic effects
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <SEO
        title="Photography Journal | Behind the Lens"
        description="Explore photography tips, behind-the-scenes stories, and creative insights from professional photoshoots."
      />
      <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-gray-100 dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero Section */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs uppercase tracking-[0.35em] font-semibold">
                📖 Photography Journal
              </span>
            </Motion.div>

            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary dark:text-white"
            >
              Behind the Lens
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Stories, tips, and insights from the world of photography.
              Join me on a journey through light, composition, and creativity.
            </Motion.p>
          </Motion.div>

          {/* Category Filter */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <Motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category}
              </Motion.button>
            ))}
          </Motion.div>

          {/* Featured Posts */}
          {selectedCategory === 'All' && (
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary dark:text-white flex items-center gap-3">
                <span className="text-accent">✨</span> Featured Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.filter(post => post.featured).map((post, index) => (
                  <Motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block h-full"
                      onMouseEnter={() => setHoveredCard(`featured-${post.id}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Motion.div
                        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 h-full"
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative h-80 overflow-hidden">
                          <Motion.div
                            animate={{
                              scale: hoveredCard === `featured-${post.id}` ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.6 }}
                          >
                            <LazyImage
                              src={post.coverImage}
                              alt={post.title}
                              className="w-full h-80 object-cover"
                            />
                          </Motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                            Featured
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-semibold mb-2">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                            Read More
                            <Motion.span
                              animate={{
                                x: hoveredCard === `featured-${post.id}` ? 5 : 0,
                              }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              →
                            </Motion.span>
                          </div>
                        </div>
                      </Motion.div>
                    </Link>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          )}

          {/* All Posts Grid with Masonry-style Layout */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-8 text-primary dark:text-white">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>

            <AnimatePresence mode="wait">
              <Motion.div
                key={selectedCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.map((post) => (
                  <Motion.div
                    key={post.id}
                    variants={cardVariants}
                    layout
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block h-full"
                      onMouseEnter={() => setHoveredCard(post.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Motion.div
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                        whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="relative h-56 overflow-hidden">
                          <Motion.div
                            animate={{
                              scale: hoveredCard === post.id ? 1.15 : 1,
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          >
                            <LazyImage
                              src={post.coverImage}
                              alt={post.title}
                              className="w-full h-56 object-cover"
                            />
                          </Motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <Motion.div
                            className="absolute top-3 right-3"
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 12, scale: 1.1 }}
                          >
                            <span className="inline-block px-3 py-1 bg-accent/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                              {post.category}
                            </span>
                          </Motion.div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="text-xl font-serif font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                              By {post.author}
                            </span>
                            <Motion.div
                              className="text-accent font-semibold text-sm flex items-center gap-2"
                              animate={{
                                x: hoveredCard === post.id ? 3 : 0,
                              }}
                            >
                              Read
                              <Motion.span
                                animate={{
                                  x: hoveredCard === post.id ? 3 : 0,
                                }}
                              >
                                →
                              </Motion.span>
                            </Motion.div>
                          </div>
                        </div>
                      </Motion.div>
                    </Link>
                  </Motion.div>
                ))}
              </Motion.div>
            </AnimatePresence>
          </Motion.div>

          {/* No posts message */}
          {filteredPosts.length === 0 && (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No posts found in this category.
              </p>
            </Motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
