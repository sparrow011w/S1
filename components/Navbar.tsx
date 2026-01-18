
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, AlertTriangle, Info } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Join Us', path: '/join-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-black text-white shadow-xl">
      {/* Top Utility Bar */}
      <div className="bg-[#b91c1c] text-white text-[10px] md:text-xs py-1 px-4 flex justify-end items-center space-x-4 uppercase font-bold tracking-widest">
        <button 
          onClick={() => navigate('/report')}
          className="flex items-center hover:opacity-80 transition-opacity border-r border-white/20 pr-4"
        >
          <AlertTriangle className="w-3 h-3 mr-1" />
          Report an Incident
        </button>
        <button 
          onClick={() => navigate('/events')}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Info className="w-3 h-3 mr-1" />
          Event Information
        </button>
        <button className="bg-white text-black px-2 py-0.5 rounded-sm hover:bg-gray-200 transition-colors ml-2">
          Donate
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Logo className="h-10 w-10 transition-transform group-hover:scale-110" color="white" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter leading-none">SPARROW</span>
              <span className="text-[10px] tracking-[0.2em] uppercase opacity-70">Agency</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide hover:text-yellow-500 transition-colors ${
                  isActive(link.path) ? 'text-yellow-500 underline underline-offset-8' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 animate-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-zinc-800 text-yellow-500'
                    : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
