import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PlaceholderSection({ id, title, subtitle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div id={id} ref={ref} className="py-24 sm:py-32 bg-slate-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </div>
  );
}