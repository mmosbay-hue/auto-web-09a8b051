import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-slate-900 overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop"
          alt="Abstract technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0f172a)]"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Empower Your Agency.
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Elevate Every Journey.
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          VoyageX is the ultimate command center for modern travel agencies. Automate workflows, personalize client experiences, and unlock unprecedented growth.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px -5px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-600/30"
          >
            Start Your Free Trial
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-slate-700 text-slate-200 font-semibold px-8 py-3 rounded-lg hover:bg-slate-800/50 hover:border-slate-600 transition-colors duration-300"
          >
            Request a Demo
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
