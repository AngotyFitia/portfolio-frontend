// export default function Hero() {
//   return (
//     <section className="bg-[#f5f5dc] py-20 text-center">
//       <img
//         src="/images/image2.jpg" width="150px"
//         alt="Portfolio banner"
//         className="mx-auto mb-6 w-48 h-48 object-cover rounded-full shadow-lg"
//       />
//       <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio</h1>
//       <p className="text-lg">
//         Explore my projects, skills, and experiences.
//       </p>
//       <button className="mt-6 bg-[#8B4512] hover:bg-brown text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
//         View my projects
//       </button>
//     </section>
//   )
// }


// export default function Hero() {
//   return (
//     <section className="bg-[#f5f5dc] py-20 px-4">
//       <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
//         {/* Image à gauche */}
//         <div className="flex-shrink-0">
//           <img src="/images/image2.jpg" alt="Portfolio banner" className="w-48 h-48 object-cover rounded-full shadow-lg md:w-64 md:h-64"/>
//           <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio</h1>
//           <p className="text-lg mb-6">
//             Explore my projects, skills, and experiences.
//           </p>
//           <button className="bg-[#8B4512] text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 hover:text-[#8B4512] transition-colors">
//             View my projects
//           </button>
//         </div>

//         {/* Texte à droite */}
//         <div className="text-center md:text-left max-w-xl">
//           <h1 className="text-4xl font-bold mb-4">Hi, I'm Angoty</h1>
//           <p className="text-lg mb-6">Passionate about technology, I'm working with a variety of tech stacks.</p>
//           <button className="bg-[#8B4512] text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 hover:text-[#8B4512] transition-colors">
//             Contact me
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }


export default function Hero() {
  return (
    <section className="bg-[#f5f5dc] py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
        
        {/* Image à gauche */}
        <div className="flex-shrink-0">
          <img
            src="/images/image2.jpg"
            alt="Portfolio banner"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg mx-auto md:mx-0"
          />
        </div>

        {/* Texte à droite */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Angoty</h1>
          <p className="text-lg mb-6">
            Passionate about technology, I'm working with a variety of tech stacks.
          </p>
          <button className="bg-[#8B4512] text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 hover:text-[#8B4512] transition-colors">
            Contact me
          </button>
        </div>

      </div>
    </section>
  );
}

