import React from 'react';

const Maintenance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Notification en haut de page */}
      <div className="bg-yellow-50 border-t-4 border-yellow-600 text-yellow-600 text-center py-4 px-6 w-full fixed top-0 left-0 z-50 shadow-md rounded-b-lg" aria-live="polite">
        <div className="text-xl sm:text-2xl font-semibold">
          <span>This site is under maintenance</span>
        </div>
        <p className="mt-2 text-base sm:text-lg">
        The site will be available again soon.
        </p>
      </div>

      {/* Contenu principal sous la notification */}
      <div className="pt-40 sm:pt-36 md:pt-28 lg:pt-24"> {/* Augmenter le padding top ici */}
        <div className="text-center py-10 px-6">
          <p className="mt-4 text-base sm:text-lg text-gray-600">
          In the meantime, you can check back later or contact me at <a href="mailto:email@example.com" className="text-blue-600 hover:underline">angotyrabarijaona@gmail.com</a> if you have any questions. Thank you for your patience!
          </p>
        </div>
        {/* Lien ou bouton de retour */}
        <div className="flex justify-center mt-8">
          <a
            href="https://linkedin.com/in/angoty-rabarijaona"
            className="px-6 py-3 text-sm sm:text-base border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white shadow-sm transition-all"
          >
            Go back to LinkedIn profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
