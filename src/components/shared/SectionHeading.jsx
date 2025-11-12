import { motion } from 'framer-motion';

const SectionHeading = ({ icon: Icon, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
        >
          <Icon className="w-6 h-6 text-blue-400" />
        </motion.div>
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />
    </motion.div>
  );
};

export default SectionHeading;