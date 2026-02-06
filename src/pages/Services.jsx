import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/portfolioData';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <>
      <SEO
        title="Photography Services | Wedding, Portrait & Commercial"
        description="Professional photography services including weddings, portraits, commercial shoots, and travel assignments."
      />
      <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-secondary via-white to-secondary dark:from-gray-900 dark:via-black dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs uppercase tracking-[0.3em] font-semibold mb-6">
              What I Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-white mb-6">
              Services
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professional photography services tailored to capture your unique story
              with creativity, professionalism, and attention to detail
            </p>
          </Motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <Motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
                >
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transition-all duration-500 group-hover:w-40 group-hover:h-40" />

                  {/* Icon */}
                  <Motion.div
                    className="text-6xl mb-6 relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {service.icon}
                  </Motion.div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary dark:text-white mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700 relative z-10">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                      Custom Pricing
                    </span>
                    <Link
                      to="/contact"
                      className="group/btn relative px-6 py-3 bg-accent text-white rounded-lg font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/30"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Inquire
                        <Motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </Motion.span>
                      </span>
                      <Motion.div
                        className="absolute inset-0 bg-accent-strong"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </div>
                </Motion.div>
              </Motion.div>
            ))}
          </div>

          {/* Process Section */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-primary via-gray-900 to-black dark:from-black dark:via-primary dark:to-gray-900 text-white rounded-3xl p-12 md:p-16 mt-20 overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                  My Process
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                  How It Works
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  A seamless journey from first contact to final delivery
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Consultation',
                    description: 'We discuss your vision, requirements, and creative direction to ensure perfect alignment',
                  },
                  {
                    step: '02',
                    title: 'Planning',
                    description: 'Detailed planning of locations, timing, shot list, and logistics for a smooth experience',
                  },
                  {
                    step: '03',
                    title: 'Shoot Day',
                    description: 'Professional photography session with expert guidance and direction throughout',
                  },
                  {
                    step: '04',
                    title: 'Delivery',
                    description: 'Professionally edited high-resolution images delivered in your preferred format',
                  },
                ].map((item, index) => (
                  <Motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="relative text-center group"
                  >
                    {/* Connecting Line */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-px bg-accent/30 transform translate-y-1/2" />
                    )}

                    {/* Step Number */}
                    <Motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 border-2 border-accent mb-6"
                    >
                      <span className="text-3xl font-bold text-accent">{item.step}</span>
                    </Motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </Motion.div>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Why Choose Me Section */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 mb-20"
          >
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs uppercase tracking-[0.3em] font-semibold mb-6">
                Why Choose Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
                What Sets Me Apart
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: '🎨',
                  title: 'Artistic Vision',
                  description: 'Unique creative perspective that brings your story to life with emotion and artistry',
                },
                {
                  icon: '⚡',
                  title: 'Fast Turnaround',
                  description: 'Professional editing and delivery within 2-3 weeks without compromising quality',
                },
                {
                  icon: '💎',
                  title: 'Premium Quality',
                  description: 'High-resolution images with meticulous attention to color, composition, and detail',
                },
              ].map((feature, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-8 bg-secondary dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          {/* CTA Section */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-12 md:p-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
              Let's discuss how we can create something amazing together.
              Get in touch to schedule a consultation and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-strong transition-all hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
              >
                Book a Consultation
              </Link>
              <Link
                to="/portfolio"
                className="px-10 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
              >
                View My Work
              </Link>
            </div>
          </Motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
