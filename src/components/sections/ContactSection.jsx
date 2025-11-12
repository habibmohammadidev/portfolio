import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { personalInfo } from '@/data/content';

const ContactSection = () => (
  <div className="mb-16 flex flex-col items-center justify-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="text-2xl font-bold mb-4 text-blue-300"
    >
      Contact Me
    </motion.h2>
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      href={`mailto:${personalInfo.email}`}
      className="flex items-center gap-2 px-6 py-3 rounded bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-colors duration-300"
    >
      <HiMail className="w-5 h-5" />
      {personalInfo.email}
    </motion.a>
  </div>
);

export default ContactSection;
