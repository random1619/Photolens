import { motion as Motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/portfolioData';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1600&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=80',
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80',
];

const FEATURED_WORK = [
  {
    id: 1,
    title: 'Timeless Romance',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
  {
    id: 2,
    title: 'Natural Beauty',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
  },
  {
    id: 3,
    title: 'Urban Stories',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO
        title="Professional Photography Portfolio | Weddings, Portraits & More"
        description="Award-winning photographer specializing in weddings, portraits, and editorial photography. Creating timeless images that tell your story."
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Images */}
          {HERO_IMAGES.map((image, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.1
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </Motion.div>
          ))}

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <Motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="max-w-5xl"
            >
              <Motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-sm md:text-base uppercase tracking-[0.3em] text-accent font-semibold mb-6"
              >
                Professional Photography
              </Motion.p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                Capturing Life's
                <br />
                <span className="text-accent">Precious Moments</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Every frame tells a story. Let me help you preserve your memories
                with timeless, elegant photography that you'll treasure forever.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/portfolio"
                  className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-accent/50"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <Motion.div
                    className="absolute inset-0 bg-accent-strong"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </Motion.div>

            {/* Scroll Indicator */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <Motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs uppercase tracking-widest text-white/70">Scroll</span>
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                  <Motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-1 h-2 bg-white rounded-full"
                  />
                </div>
              </Motion.div>
            </Motion.div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 right-10 flex gap-2">
              {HERO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-accent' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary dark:bg-black text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '300+', label: 'Happy Clients' },
                { number: '8', label: 'Years Experience' },
                { number: '15+', label: 'Awards Won' },
              ].map((stat, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-24 bg-secondary dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-12">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-white mb-6">
                Featured Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A carefully curated selection of recent projects showcasing diverse styles and stories
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {FEATURED_WORK.map((work, index) => (
                <Motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500"
                >
                  <LazyImage
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent text-sm uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {work.category}
                    </span>
                    <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-3">
                      {work.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span>View Project</span>
                      <Motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </Motion.span>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-white text-white dark:text-primary font-semibold rounded-lg hover:shadow-xl transition-all group"
              >
                View Full Portfolio
                <Motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </Motion.span>
              </Link>
            </Motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-white mb-6">
                Client Love
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Don't just take my word for it – hear from some of my wonderful clients
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group"
                >
                  <Motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-secondary dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                  >
                    {/* Quote Icon */}
                    <div className="text-6xl text-accent/20 font-serif leading-none mb-4">"</div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                      {testimonial.text}
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-primary dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </Motion.div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-24 bg-secondary dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-12">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                Journal
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-white mb-6">
                Latest Stories
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Photography tips, behind-the-scenes insights, and creative inspiration
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
              >
                View All Articles
                <Motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </Motion.span>
              </Link>
            </Motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-gray-900 text-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 lg:px-12 text-center relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Let's Create Magic Together
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether it's a wedding, portrait session, or commercial project,
              I'm here to capture your story with artistry and authenticity.
              Let's start a conversation about bringing your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-strong transition-all hover:shadow-2xl hover:shadow-accent/30 hover:scale-105"
              >
                Book a Session
              </Link>
              <Link
                to="/services"
                className="px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all"
              >
                View Services
              </Link>
            </div>

            {/* Contact Info */}
            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-300"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@photolens.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </Motion.div>
          </Motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;
