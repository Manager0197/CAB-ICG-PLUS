import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Filter } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const projects = [
    { id: 1, title: "Construction Résidence Cotonou", type: "Construction", img: "https://picsum.photos/id/122/600/400" },
    { id: 2, title: "Rénovation Bureau Administratif", type: "Rénovation", img: "https://picsum.photos/id/20/600/400" },
    { id: 3, title: "Aménagement Paysager Villa", type: "Espaces Verts", img: "https://picsum.photos/id/28/600/400" },
    { id: 4, title: "Nettoyage Industriel Usine", type: "Nettoyage", img: "https://picsum.photos/id/48/600/400" },
    { id: 5, title: "Peinture Façade Immeuble", type: "Peinture", img: "https://picsum.photos/id/54/600/400" },
    { id: 6, title: "Villa Moderne Calavi", type: "Construction", img: "https://picsum.photos/id/60/600/400" },
    { id: 7, title: "Entretien Jardin Tropical", type: "Espaces Verts", img: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=600&auto=format&fit=crop" },
    { id: 8, title: "Rénovation Appartement", type: "Rénovation", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop" },
    { id: 9, title: "Nettoyage Vitres Grande Hauteur", type: "Nettoyage", img: "https://images.unsplash.com/photo-1527515637-62199a00939e?q=80&w=600&auto=format&fit=crop" },
  ];

  const categories = ["Tous", "Construction", "Rénovation", "Espaces Verts", "Nettoyage", "Peinture"];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Nos Réalisations"
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
              Nos Réalisations
            </h1>
            <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed">
              Explorez nos projets et constatez la qualité de notre savoir-faire déployé à travers tout le Bénin.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-brand-900 text-white shadow-lg ring-2 ring-brand-900 ring-offset-2'
                  : 'bg-slate-100 text-gray-600 hover:bg-brand-100 hover:text-brand-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-72 bg-slate-200"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block w-max bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 shadow-sm">
                    {project.type}
                  </span>
                  <h3 className="text-white text-xl font-bold drop-shadow-md">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300 mb-20">
            <Filter size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">Aucun projet trouvé dans cette catégorie pour le moment.</p>
            <button onClick={() => setActiveFilter('Tous')} className="mt-4 text-brand-600 font-bold hover:underline">
              Voir tous les projets
            </button>
          </div>
        )}

        {/* Comparison Section (Simulated) */}
        <div className="bg-slate-100 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-brand-900">La transformation en images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             <div className="relative group">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-red-500 px-3 py-1 rounded-md font-bold shadow-lg text-sm uppercase tracking-wider">Avant</div>
                <img src="https://picsum.photos/id/90/600/400" alt="Before" className="rounded-xl shadow-md w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
             </div>
             <div className="relative group">
                <div className="absolute top-4 left-4 z-10 bg-brand-600 text-white px-3 py-1 rounded-md font-bold shadow-lg text-sm uppercase tracking-wider">Après</div>
                <img src="https://picsum.photos/id/91/600/400" alt="After" className="rounded-xl shadow-md w-full h-72 object-cover" />
             </div>
          </div>
          <p className="text-center mt-6 text-gray-600 italic bg-white inline-block px-6 py-2 rounded-full shadow-sm mx-auto md:mx-0 w-full md:w-auto">
            <span className="font-bold text-accent-500">Projet :</span> Rénovation complète d'un espace de vie à Cotonou.
          </p>
        </div>

        {/* Testimonials */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-900 mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-left relative transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-4 -left-4 bg-accent-500 text-white p-2 rounded-lg shadow-lg">
                  <Quote size={20} fill="currentColor" />
                </div>
                <p className="text-gray-600 mb-6 relative z-10 italic leading-relaxed">
                  "Une équipe formidable ! ICG Plus a su respecter les délais serrés de notre chantier tout en maintenant une qualité irréprochable. Je recommande vivement."
                </p>
                <div className="flex items-center pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-brand-100 rounded-full mr-3 flex items-center justify-center text-brand-700 font-bold text-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900">Client Satisfait</h4>
                    <span className="text-sm text-gray-500">Propriétaire, Cotonou</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;