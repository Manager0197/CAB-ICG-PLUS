import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Nos Services', path: '/services' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Stylisé selon la charte graphique (ICG Bleu, Plus Rouge) */}
          <Link to="/" className="flex items-center space-x-2 group">
            {/* Si vous avez le fichier logo.png, décommentez la ligne suivante et supprimez la construction SVG/Texte */}
            {/* <img src="/logo.png" alt="ICG Plus Benin" className="h-12 w-auto" /> */}
            
            <div className="flex flex-col items-center justify-center mr-1">
               <Home size={28} className={`${scrolled || isOpen ? 'text-brand-400' : 'text-white/90'} transition-colors`} strokeWidth={2.5} />
            </div>
            
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline">
                <span className={`font-heading font-black text-3xl tracking-tight ${scrolled || isOpen ? 'text-brand-900' : 'text-white'} transition-colors`}>
                  ICG
                </span>
                <span className="font-heading font-bold text-3xl text-accent-500 italic ml-0.5" style={{ fontFamily: 'cursive' }}>
                  Plus
                </span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-[0.3em] text-right -mt-1 ${scrolled || isOpen ? 'text-brand-800' : 'text-gray-200'}`}>
                Benin
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    scrolled 
                      ? (location.pathname === link.path ? 'text-accent-600' : 'text-brand-900 hover:text-accent-500')
                      : (location.pathname === link.path ? 'text-white font-bold' : 'text-white/90 hover:text-white')
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    scrolled ? 'bg-accent-500' : 'bg-white'
                  } ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <Link
                to="/contact"
                className={`${
                  scrolled 
                    ? 'bg-brand-900 text-white hover:bg-brand-800' 
                    : 'bg-white text-brand-900 hover:bg-gray-100'
                } px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg transform hover:-translate-y-0.5`}
              >
                Demander un Devis
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`${scrolled ? 'text-brand-900' : 'text-white'} hover:text-accent-500 focus:outline-none transition-colors`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-brand-50 text-brand-900 font-bold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-brand-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-6 w-full text-center bg-accent-500 text-white px-4 py-3 rounded-lg text-base font-bold shadow-md hover:bg-accent-600 transition-colors"
              >
                Demander une estimation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;