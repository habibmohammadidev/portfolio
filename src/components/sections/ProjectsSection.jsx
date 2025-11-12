import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { PiProjectorScreenChartBold } from 'react-icons/pi';
import { projects } from '@/data/content';
import SectionHeading from '../shared/SectionHeading';

const ProjectsSection = () => {
  return (
    <div className="mb-16">
      <SectionHeading 
        icon={PiProjectorScreenChartBold} 
        title="Featured Projects" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01, y: -2 }}
            className="rounded-xl overflow-hidden transition-all duration-500 ease-out border border-blue-500/30"
          >
            <div className="aspect-video bg-gray-800 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={338}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="text-blue-400 text-sm whitespace-nowrap"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed line-clamp-5">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4">
                {project.url && (
                  <motion.a
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    href={project.url}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Go to website
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;