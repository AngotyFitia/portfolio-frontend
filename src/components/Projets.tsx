import { motion } from "framer-motion";

export default function Heroi() {
  return (
    <section className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-[#f5f5dc]">
  {[
    {
      title: "Gestion et suivi de garage",
      type: "Projet de groupe",
      period: "Janvier 2025 - Février 2025",
      link: "#"
    },
    {
      title: "Gestion administrative d'un hôpital",
      type: "Projet individuel",
      period: "Mars 2024 - Avril 2025",
      link: "#"
    },
    {
      title: "Vente de produits",
      type: "Projet de groupe",
      period: "Dates non spécifiées",
      link: "#"
    },
  ].map((project, i) => (
    <motion.div
      key={i}
      className="p-6 bg-gray-100 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
      animate={{ x: [0, -20, 0] }}  // Animation de droite à gauche
      transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }} // Répéter indéfiniment avec une vitesse modérée
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
      <p className="text-gray-600">{project.type}</p>
      <p className="text-gray-500 text-sm mb-4">{project.period}</p>
      <a
        href={project.link}
        className="text-blue-600 font-medium hover:underline"
      >
        Voir plus →
      </a>
    </motion.div>
  ))}
</section>


    
  );
}
