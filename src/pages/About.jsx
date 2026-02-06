import { motion as Motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
  const skills = [
    'Wedding Photography',
    'Portrait Photography',
    'Editorial Shoots',
    'Commercial Work',
    'Travel Photography',
    'Photo Retouching',
  ];

  return (
    <>
      <SEO 
        title="About | Professional Photographer"
        description="Learn about my journey as a professional photographer specializing in weddings, portraits, and travel photography."
      />
      <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-4">
            About Me
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </Motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent opacity-20 rounded-lg -z-10" />
          </Motion.div>

          {/* Bio */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white">
              The Story Behind the Lens
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Hello! I'm a passionate photographer dedicated to capturing the authentic
                moments that make life extraordinary. With over 8 years of experience,
                I've had the privilege of documenting countless stories across weddings,
                portraits, and editorial projects.
              </p>
              <p>
                My approach combines artistic vision with technical expertise to create
                images that not only look beautiful but feel meaningful. I believe every
                photograph should tell a story and evoke emotion.
              </p>
              <p>
                When I'm not behind the camera, you'll find me exploring new locations,
                studying light, or sipping coffee while editing the day's work. Photography
                isn't just my profession—it's my passion and my way of seeing the world.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-4">
              <div className="text-2xl font-serif italic text-accent">Alex Morgan</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Professional Photographer
              </div>
            </div>
          </Motion.div>
        </div>

        {/* Skills Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary dark:bg-gray-900 rounded-lg p-12"
        >
          <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mb-8 text-center">
            Specialties & Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-accent text-3xl mb-3">✦</div>
                <h4 className="font-semibold text-primary dark:text-white">{skill}</h4>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Stats */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '8+', label: 'Years Experience' },
            { number: '300+', label: 'Happy Clients' },
            { number: '15+', label: 'Awards Won' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <Motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-accent mb-2"
              >
                {stat.number}
              </Motion.div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </Motion.div>
      </div>
      </div>
    </>
  );
};

export default About;



