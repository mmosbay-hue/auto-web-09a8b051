import React from 'react';
import { Globe, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  solutions: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3">
              <Globe className="h-8 w-auto text-indigo-500" />
              <span className="text-2xl font-bold text-white tracking-wider">VoyageX</span>
            </div>
            <p className="mt-4 text-base text-slate-400">
              The ultimate command center for modern travel agencies.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-slate-400 hover:text-indigo-400 transition-colors duration-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-slate-400 hover:text-indigo-400 transition-colors duration-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-slate-400 hover:text-indigo-400 transition-colors duration-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-base text-slate-500 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} VoyageX. All rights reserved.
          </p>
          <div className="flex space-x-6 order-1 sm:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
