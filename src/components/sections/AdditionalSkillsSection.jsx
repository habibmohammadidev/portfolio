import { motion } from 'framer-motion';
import { additionalSkills } from '@/data/content';
import SectionHeading from '../shared/SectionHeading';
import { FaPlus } from 'react-icons/fa';

const AdditionalSkillsSection = () => {
  return (
    <div className="mb-16">
      <SectionHeading icon={FaPlus} title={additionalSkills.title} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          {additionalSkills.description}
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {additionalSkills.categories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-blue-500/30 bg-gray-900/30 hover:bg-blue-900/20 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-blue-400">{category.title}</h3>
            </div>
            
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {category.description}
            </p>
            
            <div className="space-y-2">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: (idx * 0.1) + (skillIdx * 0.05), ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalSkillsSection;