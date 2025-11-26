import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
            alt="Contactez ICG Plus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-heading tracking-tight">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed">
              Une question ? Un projet ? Demandez votre devis gratuit dès aujourd'hui. Nous sommes à votre écoute.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-accent-500">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="+229..." />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="votre@email.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all">
                  <option>Demande de devis</option>
                  <option>Renseignement Services</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center shadow-lg transform hover:-translate-y-1">
                Envoyer le message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-brand-900 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-brand-800 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Adresse</h3>
                    <p className="text-slate-300">Agblangandan - 06 BP 1832<br />Cotonou, Bénin</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-800 p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Téléphone & WhatsApp</h3>
                    <p className="text-slate-300">(+229) 64 64 71 66</p>
                    <p className="text-slate-300">(+229) 53 41 54 44</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-800 p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-slate-300">cabicgplusbenin@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-800 p-3 rounded-lg mr-4">
                    <Clock size={24} className="text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Horaires</h3>
                    <p className="text-slate-300">Lundi - Vendredi : 8h00 - 18h00</p>
                    <p className="text-slate-300">Samedi : 9h00 - 13h00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Interactive Google Map */}
            <div className="bg-white rounded-2xl h-80 w-full overflow-hidden shadow-xl border border-gray-200">
              <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Agblangandan%20Cotonou%20Benin&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0}
                title="Localisation ICG Plus Benin"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;