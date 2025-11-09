import React from 'react';

const Maintenance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Notification en haut de page */}
      <div className="bg-pink-50 border-t-4 border-red-600 text-red-600 text-center py-4 px-6 w-full fixed top-0 left-0 z-50 shadow-md rounded-b-lg" aria-live="polite">
        <div className="text-xl sm:text-2xl font-semibold">
          <span>Ce site est en maintenance</span>
        </div>
        <p className="mt-2 text-base sm:text-lg">
          Je suis actuellement en train de mettre à jour mon site.
        </p>
        <p className="mt-1 text-sm sm:text-md">
          Je serai de retour très bientôt.
        </p>
      </div>

      {/* Contenu principal sous la notification */}
      <div className="pt-40 sm:pt-36 md:pt-28 lg:pt-24"> {/* Augmenter le padding top ici */}
        <div className="text-center py-10 px-6">
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            En attendant, vous pouvez revenir plus tard ou me contacter à <a href="mailto:email@example.com" className="text-blue-600 hover:underline">angotyrabarijaona@gmail.com</a> si vous avez des questions. Merci de votre patience !
          </p>
        </div>
        {/* Lien ou bouton de retour */}
        <div className="flex justify-center mt-8">
          <a
            href="https://linkedin.com/in/angoty-rabarijaona"
            className="px-6 py-3 text-sm sm:text-base border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white shadow-sm transition-all"
          >
            Revenir au profil LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
