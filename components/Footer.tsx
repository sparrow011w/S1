
import React from 'react';
import { Facebook, Linkedin, MessageCircle, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Logo className="h-12 w-12" color="white" />
              <div>
                <h2 className="text-2xl font-bold tracking-tighter">SPARROW AGENCY</h2>
                <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">Public Relations & Event Management</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Founded to confront antisemitism while elevating Jewish voices, history, and lived experience in the public arena. We operate where advocacy meets strategy.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Connect</h3>
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="w-5 h-5 mr-3" /> Facebook
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors">
                <Linkedin className="w-5 h-5 mr-3" /> LinkedIn
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors">
                <MessageCircle className="w-5 h-5 mr-3" /> WhatsApp
              </a>
              <a href="mailto:info@sparrowagency.org" className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors">
                <Mail className="w-5 h-5 mr-3" /> Email Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Offices</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Washington, D.C.</li>
              <li>Brussels, Belgium</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© 2025 Sparrow Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Legal Foundations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
