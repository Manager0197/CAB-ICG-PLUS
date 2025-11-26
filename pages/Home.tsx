import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Hammer, Leaf, Paintbrush, ShieldCheck, Clock, Users, Ruler, Star, Target, Eye, TrendingUp, Heart, Calendar, Headphones, Info } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section - Real Estate Style */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction Site High End"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-900/50 to-brand-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
              Bâtir votre Avenir <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-100">
                Sans Souci
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light border-l-4 border-accent-500 pl-4 md:pl-0 md:border-l-0 md:border-t-4 md:pt-4">
              Expertise en construction, rénovation et gestion immobilière au Bénin.
              Qualité supérieure et respect des délais garantis par <strong>ICG Plus</strong>.
            </p>
          </motion.div>

          {/* "Search Bar" Style Action Card - Real Estate Agency Vibe */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white/95 backdrop-blur-md border border-white/20 p-4 rounded-2xl max-w-4xl mx-auto shadow-2xl"
          >
            <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-left border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6 w-full">
                <label className="block text-xs font-bold text-accent-500 uppercase tracking-wider mb-1">J'ai besoin de</label>
                <select className="w-full font-heading font-bold text-brand-900 text-lg bg-transparent border-none focus:ring-0 p-0 cursor-pointer outline-none">
                  <option>Construction Complète</option>
                  <option>Rénovation & Peinture</option>
                  <option>Entretien & Nettoyage</option>
                  <option>Assistance Fiscale</option>
                </select>
              </div>
              
              <div className="flex-1 text-left border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6 w-full">
                 <label className="block text-xs font-bold text-accent-500 uppercase tracking-wider mb-1">Type de Projet</label>
                 <select className="w-full font-heading font-bold text-brand-900 text-lg bg-transparent border-none focus:ring-0 p-0 cursor-pointer outline-none">
                  <option>Résidentiel</option>
                  <option>Commercial</option>
                  <option>Industriel</option>
                  <option>Espace Public</option>
                </select>
              </div>

              <div className="w-full md:w-auto">
                <Link 
                  to="/contact"
                  className="flex items-center justify-center w-full md:w-auto px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Obtenir un Devis
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Intro Section with Floating Images */}
      <div className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-brand-50 text-brand-900 font-bold text-sm mb-6 border border-brand-100">
                  À PROPOS D'ICG PLUS
                </div>
                <h2 className="text-4xl font-heading font-bold text-brand-900 mb-6 leading-tight">
                  L'Excellence du BTP <br /> et des Services au Bénin
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Depuis 2010, ICG Plus redéfinit les standards de la construction et de l'entretien au Bénin. Notre approche "Agence 360°" nous permet de vous accompagner de la conception à la maintenance.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-accent-500 mr-3" size={24} />
                    <span className="font-medium">Gestion de projets clé en main</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-accent-500 mr-3" size={24} />
                    <span className="font-medium">Finitions haut de gamme</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-accent-500 mr-3" size={24} />
                    <span className="font-medium">Assistance administrative incluse</span>
                  </li>
                </ul>
                <Link to="/about" className="text-brand-600 font-bold hover:text-brand-800 underline decoration-2 underline-offset-4 decoration-accent-500">
                  Découvrir notre histoire
                </Link>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.img 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                  alt="Modern House" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover border-4 border-white"
                />
                <motion.img 
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  src="https://images.unsplash.com/photo-1581578731117-104f2a412724?q=80&w=2070&auto=format&fit=crop" 
                  alt="Construction Worker" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-12 border-4 border-white"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-600 text-white p-6 rounded-full shadow-2xl border-4 border-white">
                <div className="text-center">
                  <span className="block text-3xl font-bold">13+</span>
                  <span className="text-xs uppercase tracking-widest">Années</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Nos Avantages (Confiance, Sur-mesure, Qualité) */}
      <div className="py-16 bg-brand-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="w-64 h-64 bg-white rounded-full absolute -top-10 -left-10 blur-3xl"></div>
            <div className="w-64 h-64 bg-white rounded-full absolute -bottom-10 -right-10 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Pourquoi ICG Plus ?</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-800 p-8 rounded-2xl border border-brand-700 hover:border-accent-500 transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck className="text-accent-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Confiance & Transparence</h3>
              <p className="text-brand-100 text-center leading-relaxed text-sm">
                Nous bâtissons des relations durables basées sur l'honnêteté. Devis clairs, respect des budgets et communication constante sont nos engagements pour votre tranquillité d'esprit.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-800 p-8 rounded-2xl border border-brand-700 hover:border-accent-500 transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Ruler className="text-accent-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Solutions Sur-Mesure</h3>
              <p className="text-brand-100 text-center leading-relaxed text-sm">
                Chaque projet est unique. Nous adaptons nos méthodes et nos designs à vos besoins spécifiques, à votre terrain et à votre vision, pour un résultat qui vous ressemble vraiment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-brand-800 p-8 rounded-2xl border border-brand-700 hover:border-accent-500 transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="text-accent-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Qualité Supérieure</h3>
              <p className="text-brand-100 text-center leading-relaxed text-sm">
                Pas de compromis sur la qualité. Nous sélectionnons les meilleurs matériaux et travaillons avec des artisans qualifiés pour garantir la durabilité et l'esthétique de vos ouvrages.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid - Modern Cards */}
      <div className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-900 mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Une offre complète pour répondre à tous les défis de vos infrastructures immobilières.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServicePreview 
              icon={<Hammer className="text-white" size={32} />} 
              title="Construction & BTP" 
              desc="De la fondation aux finitions, nous gérons l'intégralité de votre chantier avec rigueur."
              bg="bg-brand-900"
              link="/services/construction"
            />
            <ServicePreview 
              icon={<Paintbrush className="text-white" size={32} />} 
              title="Rénovation & Design" 
              desc="Transformation d'espaces, peinture intérieure/extérieure et modernisation de votre habitat."
              bg="bg-accent-500"
              link="/services/renovation"
            />
             <ServicePreview 
              icon={<Leaf className="text-white" size={32} />} 
              title="Espaces Verts & Nettoyage" 
              desc="Paysagisme, entretien de jardins et nettoyage professionnel pour un cadre de vie sain."
              bg="bg-brand-400"
              link="/services/espaces-verts"
            />
          </div>
        </div>
      </div>

      {/* SECTION CLIENTS - 4 POINTS */}
      <div className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-brand-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-all duration-300 shadow-sm transform group-hover:-translate-y-1">
                <Heart className="text-brand-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-900 mb-3">Chaque client est spécial</h3>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                Nous accordons la priorité à vos besoins spécifiques et personnalisons nos plans de nettoyage pour qu'ils correspondent parfaitement à votre style de vie et à vos préférences.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-brand-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-all duration-300 shadow-sm transform group-hover:-translate-y-1">
                <Calendar className="text-brand-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-900 mb-3">Prendre rendez-vous en ligne</h3>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                Planifiez facilement vos services de nettoyage grâce à notre portail en ligne convivial, disponible 24h/24 et 7j/7 pour votre plus grand confort.
              </p>
            </div>

            <div className="text-center group">
               <div className="w-20 h-20 mx-auto bg-brand-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-all duration-300 shadow-sm transform group-hover:-translate-y-1">
                <Headphones className="text-brand-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-900 mb-3">Service client</h3>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                Nous offrons une assistance dédiée 24h/24 et 7j/7, prêts à vous aider rapidement pour vos réservations, vos demandes de renseignements ou vos demandes de nettoyage urgentes.
              </p>
            </div>

            <div className="text-center group">
               <div className="w-20 h-20 mx-auto bg-brand-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-all duration-300 shadow-sm transform group-hover:-translate-y-1">
                <Info className="text-brand-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-900 mb-3">Informations pour tous les services</h3>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                Nos descriptions de services détaillées vous aident à comprendre exactement à quoi vous attendre, garantissant ainsi transparence et choix éclairés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Mission, Vision, Objectif, Valeurs */}
      <div className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Text Intro */}
            <div className="md:w-1/3">
              <span className="text-accent-500 font-bold tracking-wider uppercase text-sm mb-2 block">Notre ADN</span>
              <h2 className="text-4xl font-heading font-bold text-brand-900 mb-6">
                Guidés par l'excellence et l'innovation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Chez ICG Plus, nous ne construisons pas seulement des murs, nous bâtissons le cadre de vie de demain. Notre philosophie repose sur quatre piliers fondamentaux qui orientent chacune de nos actions.
              </p>
              <Link to="/about" className="inline-flex items-center px-6 py-3 border border-brand-200 text-brand-900 font-bold rounded-lg hover:bg-brand-50 transition-colors">
                En savoir plus sur nous <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Grid of 4 pillars */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-brand-900 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-brand-900">
                    <Target size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-brand-900">Notre Mission</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Fournir des solutions de construction et de services innovantes, durables et adaptées aux réalités locales, tout en simplifiant la vie de nos clients.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-accent-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-accent-500">
                    <Eye size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-brand-900">Notre Vision</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Devenir la référence incontestée du BTP et du Facility Management au Bénin, reconnue pour son intégrité et sa qualité de finition.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-brand-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-brand-500">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-brand-900">Nos Objectifs</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Atteindre 100% de satisfaction client sur chaque projet livré et contribuer activement au développement urbain durable de nos villes.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-red-400 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-red-400">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-brand-900">Nos Valeurs</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Rigueur, Transparence, Innovation et Respect des engagements sont les boussoles qui guident nos équipes au quotidien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip with Background Image */}
      <div className="relative bg-brand-900 text-white py-16 border-t border-brand-800 overflow-hidden">
        {/* Image Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
            alt="Architecture Blueprint Background"
            className="w-full h-full object-cover opacity-20 mix-blend-soft-light"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 to-brand-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={<Users className="text-accent-500" />} value="250+" label="Clients Satisfaits" />
            <StatItem icon={<ShieldCheck className="text-accent-500" />} value="100%" label="Engagement Qualité" />
            <StatItem icon={<Clock className="text-accent-500" />} value="24h" label="Réponse Rapide" />
            <StatItem icon={<Hammer className="text-accent-500" />} value="500+" label="Chantiers Livrés" />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
            Ils nous font confiance
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos */}
            <div className="flex items-center space-x-2 group cursor-pointer">
               <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">B</div>
               <span className="font-heading font-bold text-xl text-slate-800">BATIM<span className="text-slate-400">EX</span></span>
            </div>

            <div className="flex items-center space-x-2 group cursor-pointer">
               <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold">I</div>
               <span className="font-heading font-bold text-xl text-brand-800">IMMO<span className="font-light">PRO</span></span>
            </div>

             <div className="flex items-center space-x-2 group cursor-pointer">
               <div className="border-2 border-green-600 w-10 h-10 flex items-center justify-center rounded">
                 <Leaf className="text-green-600 w-5 h-5" />
               </div>
               <span className="font-heading font-bold text-xl text-green-800">ECO<span className="text-green-600">JARDIN</span></span>
            </div>

            <div className="flex items-center space-x-2 group cursor-pointer">
               <Hammer className="text-red-500 w-8 h-8" />
               <span className="font-heading font-bold text-xl text-slate-800">SOLID<span className="text-red-500">BAT</span></span>
            </div>
            
            <div className="text-xl font-black text-slate-400 group cursor-pointer hover:text-brand-900 transition-colors">
              GROUPE <span className="font-light">ATLANTIQUE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicePreview = ({ icon, title, desc, bg, link }: { icon: any, title: string, desc: string, bg: string, link: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden group"
  >
    <div className={`${bg} p-8 flex justify-center items-center`}>
      <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm shadow-inner">
        {icon}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-xl font-bold text-brand-900 mb-3 font-heading">{title}</h3>
      <p className="text-gray-600 mb-6">{desc}</p>
      <Link to={link} className="text-brand-600 font-semibold group-hover:text-accent-500 transition-colors flex items-center">
        En savoir plus <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const StatItem = ({ icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4 p-3 bg-brand-800 rounded-full shadow-lg">{icon}</div>
    <div className="text-3xl font-bold mb-1 font-heading">{value}</div>
    <div className="text-sm text-brand-200 uppercase tracking-wider">{label}</div>
  </div>
);

export default Home;