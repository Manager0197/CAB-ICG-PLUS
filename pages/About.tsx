import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop"
            alt="Équipe ICG Plus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-heading tracking-tight">
              À propos de nous
            </h1>
            <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed">
              Découvrez l'histoire, la mission et l'équipe passionnée derrière le succès d'ICG Plus Benin.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* History & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                <Award size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Notre Histoire</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Créée en 2010, ICG Plus est née de la volonté de fournir des solutions de construction clés en main au Bénin. Nous avons rapidement élargi notre domaine d'expertise pour inclure le nettoyage et l'entretien d'espaces, apportant une approche complète à chaque projet.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Mission et Valeurs</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Notre mission est de bâtir des projets solides, d'assurer la pérennité des constructions et de fournir un environnement propre et sain grâce à notre service de nettoyage.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                Fiabilité et respect des délais
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                Professionnalisme et intégrité
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                Qualité durable
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Leadership */}
        <div className="bg-brand-50 rounded-3xl p-8 md:p-12 mb-24 border border-brand-100">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <img 
                src="https://picsum.photos/id/1005/400/400" 
                alt="CEO Jean Pierre" 
                className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-xl mx-auto"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-200 text-brand-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                <Users size={16} />
                <span>Leadership</span>
              </div>
              <h2 className="text-3xl font-bold text-brand-900 mb-2">M. Jean Pierre</h2>
              <p className="text-xl text-brand-600 font-medium mb-6">Fondateur et CEO</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Avec plus de 20 ans d'expérience dans la construction, j'ai fondé ICG Plus pour révolutionner le secteur du BTP au Bénin. Mon engagement est de transformer la vision de nos clients en réalité tangible, avec rigueur et passion."
              </p>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Partenaires & Références</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
             <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-gray-400 border border-slate-200 hover:bg-white hover:shadow-md transition-all">Partenaire 1</div>
             <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-gray-400 border border-slate-200 hover:bg-white hover:shadow-md transition-all">Gouvernement</div>
             <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-gray-400 border border-slate-200 hover:bg-white hover:shadow-md transition-all">BTP Group</div>
             <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-gray-400 border border-slate-200 hover:bg-white hover:shadow-md transition-all">Fournisseur</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;