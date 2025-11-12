import { motion } from 'framer-motion';
import { additionalTools } from '@/data/content';
import SectionHeading from '../shared/SectionHeading';
import { FaToolbox } from 'react-icons/fa';

const AdditionalToolsSection = () => (
  <div className="mb-16">
    <SectionHeading icon={FaToolbox} title="Additional Tools I Know" />
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {additionalTools.map((tool, idx) => (
        <motion.a
          key={tool.name}
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="p-4 rounded-xl border border-blue-500/30 bg-gray-900/30 hover:bg-blue-900/30 transition-all duration-500 flex items-center justify-center text-center text-blue-300 hover:text-blue-400 font-medium text-lg"
        >
          {tool.name}
        </motion.a>
      ))}
    </div>
  </div>
);

export default AdditionalToolsSection;
