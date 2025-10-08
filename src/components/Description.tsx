export default function Hero() {
    return (
      <section className="bg-[#f5f5dc]  py-20 text-center">
        <img src="/images/Image4.jfif" alt="Bannière portfolio" className="mx-auto mb-6 w-48 h-48 object-cover rounded-full shadow-lg"/>
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon portfolio</h1>
        <p className="text-lg">
          Découvrez mes projets, mes compétences et mon parcours.
        </p>
        <button className="mt-6 bg-[#8B4512] hover:bg-brown text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
          Voir mes projets
        </button>
      </section>
    )
  }
  