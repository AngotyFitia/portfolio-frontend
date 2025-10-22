import { useState } from "react";
import { Home, Mail, Folder, Code, BookOpen } from "lucide-react";
import { Menu, X } from "lucide-react"; // Icônes (tu peux installer avec `npm install lucide-react`)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <header className="bg-[#8B5E3C] text-white shadow-md fixed w-full top-0 left-0 z-50">
    // <header className="bg-[#f5f5db] shadow-md fixed w-full top-0 left-0 z-50">
    <header className="bg-[#f5f5dc] shadow-md fixed w-full top-0 left-0 z-50">
  <div className="container mx-auto flex justify-between items-center py-4 px-6">
    {/* Logo */}
    <h1 className="text-3xl font-bold text-[#8B4513]">(●'◡'●)</h1>

    {/* Bouton menu burger */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden focus:outline-none text-[#8B4513] hover:text-[#A0522D] transition-colors duration-300"
      aria-label="Toggle menu"
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

    {/* Menu desktop */}
    <nav className="hidden md:flex space-x-6 text-[#8B4513]">
      <a href="#home" className="hover:text-[#A0522D] transition-colors duration-300">Accueil</a>
      <a href="#projects" className="hover:text-[#A0522D] transition-colors duration-300">Projets</a>
      <a href="#skills" className="hover:text-[#A0522D] transition-colors duration-300">Expériences</a>
      <a href="#competences" className="hover:text-[#A0522D] transition-colors duration-300">Compétences</a>
      <a href="#formations" className="hover:text-[#A0522D] transition-colors duration-300">Formations</a>
      <a href="#contact" className="hover:text-[#A0522D] transition-colors duration-300">Contact</a>
    </nav>
  </div>

  {/* Menu mobile */}
  <div className={`fixed top-0 left-0 h-full w-64 bg-[#f5f5dc] shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
    <div className="flex justify-between items-center px-6 py-4 border-b border-[#f5f5dc]/20">
      <h2 className="text-xl font-bold text-[#8B4513]">Menu</h2>
      <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-[#8B4513] hover:text-[#A0522D] transition-colors duration-300">
        <X size={26} />
      </button>
    </div>
    <nav className="flex flex-col space-y-4 p-6 text-[#8B4513]">
      <a href="#home" className="flex items-center gap-2 hover:text-[#A0522D] transition-colors" onClick={() => setMenuOpen(false)}><Home size={20} />Accueil</a>
      <a href="#projects" className="flex items-center gap-2 hover:text-[#A0522D] transition-colors" onClick={() => setMenuOpen(false)}><Folder size={20} />Projets</a>
      <a href="#skills" className="flex items-center gap-2 hover:text-[#A0522D] transition-colors" onClick={() => setMenuOpen(false)}><Code size={20} />Expériences</a>
      <a href="#competences" className="flex items-center gap-2 hover:text-[#A0522D] transition-colors" onClick={() => setMenuOpen(false)}><Code size={20} />Compétences</a>
      <a href="#formations" className="flex items-center gap-2 hover:text-[#A0522D] transition-colors" onClick={() => setMenuOpen(false)}><BookOpen size={20} />Formations</a>
      <a href="#contact" className="flex items-center gap-2 hover:text-[#A0522D] transition-colors" onClick={() => setMenuOpen(false)}><Mail size={20} />Contact</a>
    </nav>
  </div>
</header>

  );
}

