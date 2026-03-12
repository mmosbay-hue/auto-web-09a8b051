import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonialsData = [
  {
    quote: "VoyageX has completely transformed our workflow. The AI itinerary builder is a game-changer, saving us countless hours and delighting our clients with hyper-personalized plans.",
    name: "Elena Rodriguez",
    title: "Founder, Luxe Travel Co.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&h=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "The integrated client management and automated booking engine are phenomenal. Our efficiency has skyrocketed, and we can now focus more on creating unique travel experiences.",
    name: "Marcus Chen",
    title: "CEO, Globe Trotters Inc.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=250&h=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "As a boutique agency, the branded client portal gives us a professional edge that competes with larger companies. Our clients love the seamless experience. Highly recommended!",
    name: "Aisha Khan",
    title: "Owner, Wanderlust Journeys",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&h=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const testimonialIndex = ((page % testimonialsData.length) + testimonialsData.length) % testimonialsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-base font-semibold leading-7 text-indigo-400"
          >
            Trusted by the Best
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            What Our Clients Say
          </motion.p>
        </div>

        <div className="mt-16 relative max-w-3xl mx-auto h-96 md:h-80 flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full p-8 bg-slate-800/50 rounded-2xl border border-slate-700/80 backdrop-blur-sm flex flex-col md:flex-row items-center gap-8"
            >
              <img 
                src={testimonialsData[testimonialIndex].image} 
                alt={testimonialsData[testimonialIndex].name}
                className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-slate-700 shadow-lg"
              />
              <div className="text-center md:text-left">
                <Quote className="w-10 h-10 text-indigo-500/50 absolute top-4 left-4 -translate-x-2 -translate-y-2" />
                <p className="text-slate-300 italic leading-relaxed">{`\"${testimonialsData[testimonialIndex].quote}\"`}</p>
                <div className="mt-4">
                  <p className="font-bold text-white">{testimonialsData[testimonialIndex].name}</p>
                  <p className="text-sm text-indigo-400">{testimonialsData[testimonialIndex].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => paginate(-1)} 
            className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-indigo-600/50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-slate-300" />
          </button>
          <button 
            onClick={() => paginate(1)} 
            className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-indigo-600/50 transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-slate-300" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > testimonialIndex ? 1 : -1])}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${testimonialIndex === i ? 'bg-indigo-500 scale-125' : 'bg-slate-600 hover:bg-slate-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
