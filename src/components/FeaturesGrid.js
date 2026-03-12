import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Users, CalendarCheck, BarChart3, LayoutTemplate, Landmark } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="h-8 w-8" />,
    title: "AI-Powered Itinerary Builder",
    description: "Craft personalized travel plans in minutes. Our AI analyzes client preferences to suggest optimal routes, activities, and accommodations.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Integrated Client Management",
    description: "Keep all client information, communication history, and booking details in one secure, easily accessible place.",
  },
  {
    icon: <CalendarCheck className="h-8 w-8" />,
    title: "Automated Booking Engine",
    description: "Connect with global suppliers and automate flight, hotel, and tour bookings, saving you hours of manual work.",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Insightful Analytics Dashboard",
    description: "Track your sales, commissions, and business growth with our real-time analytics and customizable reports.",
  },
  {
    icon: <LayoutTemplate className="h-8 w-8" />,
    title: "Branded Client Portal",
    description: "Provide your clients with a beautiful, professional portal to view their itineraries, make payments, and communicate with you.",
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    title: "Global Payment Processing",
    description: "Effortlessly handle payments from clients worldwide with our secure, multi-currency payment gateway integration.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-base font-semibold leading-7 text-indigo-400"
          >
            Everything You Need
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            A Better Workflow for Travel Agencies
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            VoyageX combines powerful AI with intuitive tools to help you manage less and sell more. Focus on creating unforgettable experiences for your clients.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700/80 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-600/20"
            >
              <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-base text-slate-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}