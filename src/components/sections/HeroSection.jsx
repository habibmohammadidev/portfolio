import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaStackOverflow, FaDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { personalInfo, socialLinks } from '@/data/content';


const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="flex flex-col items-center lg:items-start"
      >
        <div className="w-48 h-48 mb-6 ring-2 ring-gray-800 relative rounded-full overflow-hidden">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-4"
        >
          <HiMail className="w-4 h-4" />
          {personalInfo.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="flex w-full items-center gap-4 justify-between"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.title}
              title={link.title}
              initial={{ x: 5, scale: 0.2 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getSocialIcon(link.title)}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="flex-1 text-center lg:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-4xl lg:text-6xl font-bold mb-3 tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-xl text-gray-400 mb-5"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="text-gray-300 leading-relaxed text-lg text-justify w-full"
        >
          {personalInfo.description}
        </motion.p>

        <div className="flex justify-center lg:justify-start items-center gap-4 mt-6">
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <a
              className="flex items-center border border-blue-700/50 text-blue-300 hover:bg-blue-900/30 transition-all duration-300 py-2 px-4 rounded-sm"
              href={`mailto:${personalInfo.email}`}
            >
              <HiMail className="w-4 h-4 mr-2" />
              <span>Get in touch</span>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <a
              className="flex items-center border border-gray-700/50 text-gray-300 hover:bg-gray-800/30 transition-all duration-300 py-2 px-4 rounded-sm"
              href="/resume/Habib Mohammadi - resume 2025.11.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="w-4 h-4 mr-2" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const getSocialIcon = (title) => {
  switch (title) {
    case 'GitHub':
      return <FaGithub className="w-8 h-8 text-gray-200 hover:text-gray-500" />;
    case 'LinkedIn':
      return <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-700" />;
    case 'X':
    case 'Twitter':
      return <FaTwitter className="w-8 h-8 text-blue-400 hover:text-blue-600" />;
    case 'Instagram':
      return <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700" />;
    case 'Stack Overflow':
      return <FaStackOverflow className="w-8 h-8 text-orange-400 hover:text-orange-600" />;
    default:
      return null;
  }
};

export default HeroSection;