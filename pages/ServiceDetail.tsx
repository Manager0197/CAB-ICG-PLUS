
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, ShieldCheck, Clock, Users, Hammer, Sparkles, Paintbrush, Trees, FileText, ChevronRight } from 'lucide-react';

// Données des services (Simulant une base de données)
const servicesData: Record<string, any> = {
  'construction': {
    title: "Suivi de Construction & BTP",
    subtitle: "Expertise technique pour des fondations solides",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    icon: <Hammer size={48} />,
    color: "brand-900", // Bleu ICG
    description: "Chez ICG Plus, la construction n'est pas seulement une question de briques et de béton, c'est l'art de concrétiser votre vision. Nous assurons un suivi rigoureux de chaque étape, du terrassement aux finitions, en garantissant le respect des normes de sécurité et de qualité en vigueur au Bénin.",
    contentImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2072&auto=format&fit=crop",
    features: [
      "Maîtrise d'œuvre et pilotage de chantier",
      "Gros œuvre et maçonnerie générale",
      "Études techniques et structurelles",
      "Respect strict des délais et du budget",
      "Rapports d'avancement hebdomadaires avec photos"
    ],
    benefits: [
      { title: "Expertise Locale", desc: "Connaissance approfondie des sols et matériaux locaux." },
      { title: "Sérénité Totale", desc: "Nous gérons les imprévus, vous profitez du résultat." },
      { title: "Garantie Qualité", desc: "Contrôles rigoureux à chaque étape clé." }
    ]
  },
  'nettoyage': {
    title: "Nettoyage Professionnel",
    subtitle: "La propreté, reflet de votre image",
    heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop",
    icon: <Sparkles size={48} />,
    color: "accent-500", // Rouge Plus
    description: "Un environnement propre est essentiel pour la santé, le bien-être et la productivité. ICG Plus déploie des équipes formées et équipées pour assurer l'hygiène de vos locaux professionnels, industriels ou résidentiels avec une discrétion absolue et une efficacité redoutable.",
    contentImage: "https://images.unsplash.com/photo-1584621683833-e35147944630?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Nettoyage de bureaux et locaux commerciaux",
      "Entretien de résidences et copropriétés",
      "Nettoyage de fin de chantier (remise en état)",
      "Traitements des sols (marbre, carrelage, moquette)",
      "Désinfection et protocoles sanitaires"
    ],
    benefits: [
      { title: "Équipes Formées", desc: "Personnel qualifié, discret et de confiance." },
      { title: "Produits Adaptés", desc: "Utilisation de produits respectueux des surfaces." },
      { title: "Flexibilité", desc: "Interventions aux horaires qui vous conviennent." }
    ]
  },
  'renovation': {
    title: "Rénovation & Peinture",
    subtitle: "Donnez une nouvelle vie à vos espaces",
    heroImage: null,
    icon: <Paintbrush size={48} />,
    color: "brand-600",
    description: "Que vous souhaitiez moderniser une villa ancienne ou rafraîchir vos bureaux, notre pôle rénovation transforme vos espaces. Nous allions esthétique et fonctionnalité, en utilisant des matériaux durables et des techniques de finition soignées pour un rendu impeccable.",
    contentImage: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Peinture intérieure et extérieure haute qualité",
      "Pose de carrelage et revêtements de sol",
      "Réagencement de cloisons et plâtrerie",
      "Rénovation de cuisines et salles de bain",
      "Étanchéité et traitement de façades"
    ],
    benefits: [
      { title: "Finitions Soignées", desc: "Le souci du détail est notre marque de fabrique." },
      { title: "Conseil Déco", desc: "Accompagnement dans le choix des teintes et matériaux." },
      { title: "Chantier Propre", desc: "Protection des lieux et nettoyage après travaux." }
    ]
  },
  'espaces-verts': {
    title: "Espaces Verts & Paysagisme",
    subtitle: "La nature sublimée chez vous",
    heroImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2072&auto=format&fit=crop",
    icon: <Trees size={48} />,
    color: "green-600",
    description: "Votre extérieur est la première chose que l'on voit. ICG Plus conçoit et entretient des jardins qui respirent la santé et l'harmonie. De la création paysagère à l'entretien régulier, nous faisons de vos espaces verts un véritable havre de paix.",
    contentImage: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Conception et aménagement paysager",
      "Entretien régulier (tonte, taille, désherbage)",
      "Systèmes d'arrosage automatique",
      "Plantation d'arbres et massifs floraux",
      "Élagage et soins aux arbres"
    ],
    benefits: [
      { title: "Main Verte", desc: "Des jardiniers passionnés et expérimentés." },
      { title: "Esthétique Durable", desc: "Choix de plantes adaptées au climat local." },
      { title: "Contrats Annuels", desc: "Des formules d'entretien pour toute l'année." }
    ]
  },
  'assistance': {
    title: "Assistance Administrative",
    subtitle: "Vos démarches immobilières simplifiées",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    icon: <FileText size={48} />,
    color: "slate-600",
    description: "La gestion immobilière implique souvent des complexités administratives. ICG Plus agit comme votre facilitateur. Nous vous assistons dans toutes les formalités liées à vos propriétés, vous faisant gagner un temps précieux et vous évitant les tracas bureaucratiques.",
    contentImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
    features: [
      "Aide à l'obtention de permis de construire",
      "Gestion des déclarations fiscales foncières",
      "Assistance pour les raccordements (eau, électricité)",
      "Suivi des dossiers de régularisation",
      "Conseil en gestion locative"
    ],
    benefits: [
      { title: "Gain de Temps", desc: "Nous connaissons les rouages de l'administration." },
      { title: "Conformité", desc: "Assurez-vous d'être en règle avec la loi." },
      { title: "Tranquillité", desc: "Déléguez la paperasse à des experts." }
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-bold text-brand-900 mb-4">Service introuvable</h2>
        <p className="text-gray-600 mb-8">Désolé, le service que vous recherchez n'existe pas.</p>
        <Link to="/services" className="px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors">
          Retour aux services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden bg-brand-900">
        <div className="absolute inset-0 z-0">
          {service.heroImage && (
            <img 
              src={service.heroImage} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-900/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Link to="/services" className="inline-flex items-center text-brand-200 hover:text-white mb-6 transition-colors font-medium">
                <ArrowRight className="rotate-180 mr-2" size={16} /> Retour aux services
              </Link>
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20`}>
                  {service.icon}
                </div>
                <span className="text-accent-400 font-bold uppercase tracking-widest text-sm">Expertise ICG Plus</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-200 font-light border-l-4 border-accent-500 pl-6">
                {service.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-900 mb-6 relative inline-block">
              Notre Approche
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {service.description}
            </p>
            
            <div className="bg-brand-50 rounded-xl p-8 border border-brand-100">
              <h3 className="font-bold text-brand-900 text-xl mb-6 flex items-center">
                <CheckCircle className="text-accent-500 mr-3" /> Ce que nous proposons :
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="text-brand-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-100 rounded-full z-0"></div>
            <img 
              src={service.contentImage} 
              alt="Service en action" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white"
            />
            {/* Floating Card */}
            <div className="absolute bottom-8 right-8 z-20 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border-l-4 border-accent-500">
              <div className="flex items-center mb-2">
                <ShieldCheck className="text-brand-600 mr-2" />
                <span className="font-bold text-brand-900">Qualité Garantie</span>
              </div>
              <p className="text-sm text-gray-500">Nos prestations sont réalisées selon les standards les plus élevés du métier.</p>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-900">Pourquoi choisir ICG Plus ?</h2>
            <p className="text-gray-500 mt-4">Une expertise reconnue pour ce service spécifique.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-200 hover:border-accent-500 group"
              >
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-50 group-hover:text-accent-500 transition-colors">
                  {idx === 0 ? <Users size={24} /> : idx === 1 ? <ShieldCheck size={24} /> : <Clock size={24} />}
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à lancer votre projet de {service.title.toLowerCase()} ?</h2>
            <p className="text-brand-100 text-lg mb-10">
              Discutez avec nos experts dès aujourd'hui pour obtenir une estimation gratuite et personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full transition-all shadow-lg transform hover:scale-105 flex items-center justify-center"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a 
                href="tel:+22964647166" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full transition-all border border-white/30 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Appeler un expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
