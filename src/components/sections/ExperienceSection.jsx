import { motion } from 'framer-motion';
import { MdWork } from 'react-icons/md';
import { workExperience } from '@/data/content';
import SectionHeading from '../shared/SectionHeading';

const ExperienceSection = () => {
  return (
    <div className="mb-16">
      <SectionHeading 
        icon={MdWork} 
        title="Professional Journey" 
      />

      <div className="space-y-12">
        {workExperience.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {experience.company}
                </h3>
                <p className="text-blue-400 font-medium text-lg">
                  {experience.position}
                </p>
              </div>
              <span className="text-gray-400">{experience.period}</span>
            </div>

            <p className="text-lg text-gray-200 mb-2">
              {experience.shortDesc}
            </p>

            <ul className="space-y-2 mb-8 pl-3">
              {experience.bulletPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-300 text-lg"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 + 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                  />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;