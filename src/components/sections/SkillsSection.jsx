import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { skills } from '@/data/content';
import SectionHeading from '../shared/SectionHeading';

const SkillsSection = () => {
  return (
    <div className="mb-16">
      <SectionHeading 
        icon={RiReactjsLine} 
        title="Tech Arsenal" 
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group p-4 flex flex-col items-center rounded-xl border border-blue-500/30 group bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-500"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <Icon className={`w-10 h-10 group-hover:scale-110 transition-transform duration-500`} style={{ color: skill.color }} fill={skill.color} />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;