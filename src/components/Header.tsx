import { useState } from "react";
import { Home, Mail, Folder, Code } from "lucide-react";
import { Menu, X } from "lucide-react"; // Icônes (tu peux installer avec `npm install lucide-react`)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <header className="bg-[#8B5E3C] text-white shadow-md fixed w-full top-0 left-0 z-50">
    <header className="bg-[#f5f5dc] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">My Website</h1>
        {/* Bouton menu burger (visible uniquement sur mobile) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none" >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu navigation (visible sur desktop) */}
        <nav className="hidden md:flex space-x-6">
          {/* <a href="#home" className="hover:text-[#f5f5dc] transition-colors"> Home</a> */}
          <a href="#home" className="hover:text-[#8B4512] transition-colors"> Home</a>
          <a href="#projects" className="hover:text-[#8B4512] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#8B4512] transition-colors"> Competences</a>
          <a href="#contact" className="hover:text-[#8B4512] transition-colors">Contact me</a>
        </nav>
      </div>

      {/* Menu mobile (slide sidebar) */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#f5f5dc]  shadow-lg transform transition-transform duration-300 ease-in-out ${ menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#f5f5dc]/20">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-6">
        <a href="#home" className="flex items-center gap-2 hover:text-[#f5f5dc] transition-colors" onClick={() => setMenuOpen(false)}> <Home size={20} /><span>Home</span></a>
        <a href="#home" className="flex items-center gap-2 hover:text-[#f5f5dc] transition-colors" onClick={() => setMenuOpen(false)}> <Folder size={20} /><span>Projects</span></a>
        <a href="#home" className="flex items-center gap-2 hover:text-[#f5f5dc] transition-colors" onClick={() => setMenuOpen(false)}> <Code size={20} /><span>Competences</span></a>
        <a href="#home" className="flex items-center gap-2 hover:text-[#f5f5dc] transition-colors" onClick={() => setMenuOpen(false)}> <Mail size={20} /><span>Contact</span></a>
          {/* <a href="#projects" className="hover:text-[#f5f5dc] transition-colors" onClick={() => setMenuOpen(false)}> <Folder size={24}/><span>Projects</span></a> */}
        </nav>
      </div>
    </header>
  );
}

