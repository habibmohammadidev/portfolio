import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaStackOverflow, FaLinkedin, FaDownload } from 'react-icons/fa';
import { socialLinks } from '@/data/content';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-20 px-6 py-3 bg-black/50 backdrop-blur-sm font-mono"
    >
      <nav className="w-full flex items-center justify-between">
        <div className="text-white">
          <Link href="/" className="flex gap-2 items-center">
            <span className="text-lg font-bold">HM</span>
            <span className="text-lg">portfolio</span>
          </Link>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          {socialLinks.map((link) => {
            const Icon = link.title === 'GitHub' ? FaGithub : link.title === 'Stack Overflow' ? FaStackOverflow : FaLinkedin;
            return (
              <Link key={link.title} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.title}>
                <Icon className="w-6 h-6 hover:text-white transition-colors duration-200" />
              </Link>
            );
          })}
          <Link href="/resume/Habib Mohammadi - resume 2025.11.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
            <FaDownload className="w-5 h-5 hover:text-white transition-colors duration-200" />
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </main>
      <footer className="bg-gray-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} - Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;