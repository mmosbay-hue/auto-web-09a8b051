import React from 'react';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Starter',
    price: '49',
    description: 'For new agencies getting started.',
    features: [
      'Up to 100 clients',
      'Basic itinerary builder',
      'Email support',
      'Standard reporting',
    ],
    isRecommended: false,
  },
  {
    name: 'Professional',
    price: '99',
    description: 'For growing agencies that need more power.',
    features: [
      'Unlimited clients',
      'Advanced itinerary builder',
      'Workflow automation',
      'Priority email & chat support',
      'Custom branding',
      'API Access',
    ],
    isRecommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale agencies with specific needs.',
    features: [
      'All Professional features',
      'Dedicated account manager',
      'On-premise deployment option',
      'Advanced security & compliance',
      'Custom integrations',
    ],
    isRecommended: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PricingCard = ({ plan }) => {
  const { name, price, description, features, isRecommended } = plan;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`relative flex flex-col h-full p-8 rounded-2xl border bg-slate-800/50 ${isRecommended ? 'border-indigo-500 border-2 shadow-2xl shadow-indigo-500/20' : 'border-slate-700'}`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star size={14} className="fill-current" />
          Most Popular
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 text-slate-400">{description}</p>
        <div className="mt-6">
          {price === 'Custom' ? (
            <p className="text-4xl font-bold tracking-tight text-white">Custom</p>
          ) : (
            <p className="text-4xl font-bold tracking-tight text-white">
              ${price}<span className="text-lg font-medium text-slate-400">/mo</span>
            </p>
          )}
        </div>
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-6 w-6 text-indigo-400 flex-shrink-0 mt-1" />
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${isRecommended ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-700/50 text-indigo-400 hover:bg-slate-700'}`}
        >
          {price === 'Custom' ? 'Contact Sales' : 'Choose Plan'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The right price for you, whoever you are
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Simple, transparent pricing that scales with your agency. No hidden fees.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
