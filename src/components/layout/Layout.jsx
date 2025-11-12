import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa';

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
          <Link href="https://github.com/habibmohammadi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 hover:text-white transition-colors duration-200" />
          </Link>
          <Link href="https://stackoverflow.com/users/1164752/habib-mohammadi" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
            <FaStackOverflow className="w-6 h-6 hover:text-orange-400 transition-colors duration-200" />
          </Link>
          <Link href="https://www.linkedin.com/in/habibollah-mohammadi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 hover:text-blue-400 transition-colors duration-200" />
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