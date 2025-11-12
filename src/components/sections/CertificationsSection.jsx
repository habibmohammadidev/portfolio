import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCertificate } from 'react-icons/fa';
import { certifications } from '@/data/content';
import SectionHeading from '../shared/SectionHeading';

const CertificationsSection = () => {
  return (
    <div className="mb-16">
      <SectionHeading 
        icon={FaCertificate} 
        title="Achievements & Badges" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-blue-500/30 bg-gradient-to-br from-gray-900/50 to-blue-900/20 hover:border-blue-400/50 transition-all duration-500"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl text-blue-400">
                  <FaCertificate />
                </div>
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              </div>
              
              <div className="space-y-2 flex-grow">
                <p className="text-blue-300 text-sm font-medium">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
                {cert.description && (
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">{cert.description}</p>
                )}
              </div>
              
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  View Certificate →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;