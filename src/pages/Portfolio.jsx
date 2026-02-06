import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { portfolioData, categories, beforeAfterData } from '../data/portfolioData';
import { useGallery } from '../context/GalleryContext';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState(portfolioData);
  const [isLoading, setIsLoading] = useState(false);
  const { openGallery } = useGallery();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsLoading(true);
    setTimeout(() => {
      if (category === 'All') {
        setFilteredImages(portfolioData);
      } else {
        setFilteredImages(
          portfolioData.filter((item) => item.category === category)
        );
      }
      setIsLoading(false);
    }, 300);
  };

  const handleImageClick = (index) => {
    openGallery(filteredImages, index);
  };

  return (
    <>
      <SEO
        title="Portfolio | Professional Photo Gallery"
        description="Explore my photography portfolio featuring portrait, wedding, travel, street, and nature photography."
      />
      <div className="min-h-screen pt-24 pb-24 bg-[radial-gradient(1200px_600px_at_15%_-10%,rgba(199,154,90,0.25),transparent_60%),radial-gradient(1000px_600px_at_90%_10%,rgba(64,42,24,0.18),transparent_55%)]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                Curated Collection
                <span className="h-px w-10 bg-[color:var(--accent)]/70" />
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[var(--ink)]">
                Portfolio
              </h1>
              <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl">
                A tactile, luminous archive of weddings, portraits, travel, and street scenes
                crafted with a painterly sense of light.
              </p>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${selectedCategory === category
                      ? 'border-transparent bg-[color:var(--accent)] text-white shadow-[0_12px_30px_rgba(199,154,90,0.35)]'
                      : 'border-black/10 bg-white/70 text-[var(--muted)] hover:border-[color:var(--accent)] hover:text-[var(--ink)] dark:border-white/10 dark:bg-white/5'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-panel rounded-3xl p-6 shadow-[0_24px_60px_rgba(20,15,10,0.2)]"
            >
              <div className="grid grid-cols-2 gap-4 text-sm text-[var(--muted)]">
                <div className="rounded-2xl bg-white/70 p-4 dark:bg-white/5">
                  <p className="text-xs uppercase tracking-[0.3em]">Curation</p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--ink)]">120+</p>
                  <p className="mt-1 text-xs">Moments archived</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-4 dark:bg-white/5">
                  <p className="text-xs uppercase tracking-[0.3em]">Locations</p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--ink)]">18</p>
                  <p className="mt-1 text-xs">Cities captured</p>
                </div>
                <div className="col-span-2 rounded-2xl bg-[color:var(--accent)]/10 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Featured Palette
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-[#c79a5a]" />
                    <span className="h-8 w-8 rounded-full bg-[#5c4026]" />
                    <span className="h-8 w-8 rounded-full bg-[#f2e6d8]" />
                    <span className="text-xs text-[var(--muted)]">Warm, cinematic neutrals</span>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>

          {/* Before/After Showcase Section */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 mb-16"
          >
            <div className="text-center mb-12">
              <Motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-4"
              >
                <span className="h-px w-10 bg-[color:var(--accent)]/70" />
                Editing Showcase
                <span className="h-px w-10 bg-[color:var(--accent)]/70" />
              </Motion.span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--ink)] mb-4">
                The Art of Post-Processing
              </h2>
              <p className="text-base text-[var(--muted)] max-w-2xl mx-auto">
                Witness the transformation from raw capture to final masterpiece.
                Drag the slider to reveal the magic of professional editing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beforeAfterData.map((item, index) => (
                <Motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="glass-panel rounded-3xl p-6 shadow-[0_18px_45px_rgba(25,20,15,0.18)]"
                >
                  <BeforeAfterSlider
                    before={item.before}
                    after={item.after}
                    title={item.title}
                  />
                  <div className="mt-4 text-center">
                    <span className="inline-block px-3 py-1 bg-[color:var(--accent)]/10 text-[color:var(--accent)] rounded-full text-xs font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          {/* Gallery Grid */}
          <div className="mt-16">
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="aspect-[3/4] rounded-3xl bg-white/60 dark:bg-white/10 animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <Motion.div
                layout
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredImages.map((item, index) => (
                  <Motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    onClick={() => handleImageClick(index)}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/30 bg-white/70 shadow-[0_18px_45px_rgba(25,20,15,0.18)] backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <LazyImage
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                            {item.category}
                          </p>
                          <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                          <p className="mt-1 text-sm text-white/70">{item.location}</p>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Motion.div>
                ))}
              </Motion.div>
            )}

            {filteredImages.length === 0 && !isLoading && (
              <div className="text-center py-20">
                <p className="text-[var(--muted)] text-lg">
                  No images found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;


