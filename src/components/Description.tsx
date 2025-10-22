export default function Hero() {
  return (
    <section className="bg-[#f5f5dc] mt-20 py-20 px-2 md:px-4 text-[#2e2e2e]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texte */}
        <div className="md:w-1/2 text-center md:text-left">
        {/* <h2 className="overflow-hidden whitespace-nowrap border-r-4 border-[#8B4513] text-4xl font-bold mb-6 animate-typing">
          Bienvenue sur mon site web
        </h2> */}
          <h2 className="overflow-hidden border-r-4 border-[#8B4513] text-3xl md:text-4xl font-bold mb-6 animate-typing">
            Bienvenue sur mon site web
          </h2>
          <div className="opacity-0 animate-fade-in-up text-lg leading-relaxed text-[#2e2e2e]">
            <p className="mb-6">
              Actuellement en Master 2 à l’Université Côte d’Azur, je suis passionnée par le développement logiciel et l’analyse de données. Curieuse, rigoureuse et toujours en quête de nouveaux défis, j’ai eu l’occasion de participer à plusieurs projets académiques et professionnels qui ont renforcé mon sens de l’organisation et du travail en équipe.
            </p>
            <p className="mb-8">
              Je suis aujourd’hui à la recherche d’une nouvelle opportunité dans le domaine de l’informatique, où je pourrai contribuer activement à des projets concrets tout en développant mes compétences.
            </p>
          </div>
          <button className="mt-8 bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5c3d12] transition-colors shadow-md">
            Contactez-moi
          </button>
        </div>
        
        {/* Profil */}
        <div className="md:w-1/2 text-center mt-10 md:mt-0">
          <img
            src="/images/image2.jpg"
            alt="Photo de profil d'Angoty Fitia RABARIJAONA"
            className="w-48 h-48 md:w-52 md:h-52 object-cover rounded-full shadow-xl ring-4 ring-[#8B4513] mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Angoty Fitia RABARIJAONA</h3>
          <p className="text-lg text-[#5c4b3b]">Développeuse Full-Stack | Étudiante</p>
        </div>
        
      </div>
    </section>
  );
}
