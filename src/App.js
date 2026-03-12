import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import Pricing from './components/Pricing';
import PlaceholderSection from './components/PlaceholderSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-900 text-slate-200 antialiased selection:bg-indigo-500/30">
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <Pricing />
        <PlaceholderSection 
          id="testimonials" 
          title="What Our Customers Say"
          subtitle="Customer testimonials will be displayed here to build trust and credibility."
        />
      </main>
      <Footer />
    </div>
  );
}
