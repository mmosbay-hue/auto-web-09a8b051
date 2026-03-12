import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Globe className="h-8 w-auto text-indigo-500" />
          <span className="text-2xl font-bold text-white tracking-wider">VoyageX</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300">Features</a>
          <a href="#pricing" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300">Pricing</a>
          <a href="#testimonials" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300">Testimonials</a>
        </nav>
        <button className="hidden md:inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-600/30">
          Get Started
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
