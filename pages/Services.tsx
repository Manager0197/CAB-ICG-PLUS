import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HardHat, Sparkles, Paintbrush, Trees, FileText, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  delay: number;
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, color, delay, id }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 hover:shadow-2xl transition-shadow group flex flex-col h-full"
    style={{ borderColor: color }}
  >
    <div className="p-8 flex-grow">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white shadow-md transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      
      <div className="bg-slate-50 rounded-xl p-5 mb-6">
        <h4 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Services inclus :</h4>
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-slate-700">
              <span className="mr-2 text-xl leading-none" style={{ color }}>•</span>
              {feature}
            </li>
          ))}
          {features.length > 3 && (
             <li className="text-xs text-gray-400 italic pl-4">+ et plus encore...</li>
          )}
        </ul>
      </div>
    </div>
    <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
      <Link 
        to={`/services/${id}`} 
        className="flex items-center justify-between font-bold transition-colors"
        style={{ color }}
      >
        En savoir plus
        <span className="bg-white p-2 rounded-full shadow-sm group-hover:translate-x-2 transition-transform">
           <ArrowRight size={16} />
        </span>
      </Link>
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section - With Image Background */}
      <div className="relative pt-32 pb-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Services ICG Plus Construction et Nettoyage"
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient Blue for Brand Consistency and Text Readability */}
          <div className="absolute inset-0 bg-brand-900/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-heading tracking-tight drop-shadow-lg">
              Nos Services
            </h1>
            <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed font-light">
              Une expertise complète en BTP, rénovation et entretien pour répondre à tous vos défis immobiliers avec professionnalisme.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-24 relative z-20">
          <ServiceCard
            id="construction"
            icon={<HardHat size={28} />}
            title="Suivi de Construction"
            description="Une gestion de projet rigoureuse pour garantir que vos constructions respectent les normes, le budget et les délais."
            features={[
              "Gestion complète de projets BTP",
              "Contrôle qualité et sécurité sur site",
              "Gestion du budget et des délais",
              "Rapports d'avancement réguliers"
            ]}
            color="#002395" // brand-900
            delay={0.1}
          />

          <ServiceCard
            id="nettoyage"
            icon={<Sparkles size={28} />}
            title="Nettoyage Professionnel"
            description="Des solutions de nettoyage flexibles pour maintenir vos espaces impeccables, que ce soit au bureau ou à la maison."
            features={[
              "Nettoyage bureaux et administrations",
              "Nettoyage résidentiel",
              "Remise en état fin de chantier",
              "Désinfection professionnelle"
            ]}
            color="#ef4444" // accent-500
            delay={0.2}
          />

          <ServiceCard
            id="renovation"
            icon={<Paintbrush size={28} />}
            title="Peinture et Rénovation"
            description="Donnez une nouvelle vie à vos bâtiments avec nos services de rénovation complète et de peinture soignée."
            features={[
              "Peinture intérieure et extérieure",
              "Rénovation complète (maisons/apparts)",
              "Plomberie et électricité",
              "Finitions haut de gamme"
            ]}
            color="#2563eb" // brand-600
            delay={0.3}
          />

          <ServiceCard
            id="espaces-verts"
            icon={<Trees size={28} />}
            title="Espaces Verts"
            description="Création et entretien de jardins pour un environnement extérieur apaisant et esthétique."
            features={[
              "Conception de jardins et paysagisme",
              "Entretien et tonte de pelouses",
              "Systèmes d'arrosage automatique",
              "Entretien saisonnier"
            ]}
            color="#16a34a" // green-600
            delay={0.4}
          />

          <ServiceCard
            id="assistance"
            icon={<FileText size={28} />}
            title="Assistance Administrative"
            description="Un accompagnement précieux pour vos démarches fiscales et administratives liées à vos propriétés."
            features={[
              "Gestion des démarches fiscales",
              "Aide pour impôts fonciers",
              "Dossiers permis de construire",
              "Assistance sinistres et assurances"
            ]}
            color="#475569" // slate-600
            delay={0.5}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;