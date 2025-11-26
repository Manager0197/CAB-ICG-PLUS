import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-slate-300">
      {/* Banner Top */}
      <div className="bg-accent-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-white">
          <p className="font-medium mb-2 md:mb-0">Prêt à démarrer votre projet de construction ?</p>
          <Link to="/contact" className="flex items-center font-bold hover:underline">
            Contactez-nous maintenant <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
               <span className="font-heading font-black text-2xl text-white">ICG</span>
               <span className="font-heading font-bold text-2xl text-accent-500 italic" style={{fontFamily: 'cursive'}}>Plus</span>
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Benin</span>
            </div>
            <p className="mb-4 text-sm text-brand-100 leading-relaxed">
              Votre partenaire de confiance pour des constructions sans souci au Bénin. Nous bâtissons l'avenir avec qualité, intégrité et professionnalisme.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-brand-800 p-2 rounded-full text-white hover:bg-accent-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-brand-800 p-2 rounded-full text-white hover:bg-accent-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-brand-800 p-2 rounded-full text-white hover:bg-accent-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-brand-700 pb-2 inline-block">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-accent-500 transition-colors flex items-center"><span className="mr-2">›</span> Accueil</Link></li>
              <li><Link to="/services" className="hover:text-accent-500 transition-colors flex items-center"><span className="mr-2">›</span> Nos Services</Link></li>
              <li><Link to="/gallery" className="hover:text-accent-500 transition-colors flex items-center"><span className="mr-2">›</span> Réalisations</Link></li>
              <li><Link to="/about" className="hover:text-accent-500 transition-colors flex items-center"><span className="mr-2">›</span> À propos</Link></li>
              <li><Link to="/contact" className="hover:text-accent-500 transition-colors flex items-center"><span className="mr-2">›</span> Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-brand-700 pb-2 inline-block">Contactez-nous</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-0.5 text-accent-500 flex-shrink-0" />
                <span>Agblangandan - 06 BP 1832<br />Cotonou, Bénin</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-accent-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <span>+229 64 64 71 66</span>
                  <span>+229 53 41 54 44</span>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-accent-500 flex-shrink-0" />
                <span>cabicgplusbenin@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-200">
          <p>&copy; {new Date().getFullYear()} ICG Plus Benin. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;