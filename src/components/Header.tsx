import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = `https://wa.me/5587996175314?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os planos.')}`;
  const openWhatsApp = () => window.open(whatsappLink, '_blank');

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <img
              src="/WhatsApp_Image_2025-11-26_at_06.44.43-removebg-preview.png"
              alt="Leandro IPTV Logo"
              className="h-18 sm:h-20 w-auto drop-shadow-xl"
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={openWhatsApp} className="hover:text-blue-500 transition">Home</button>
            <button onClick={openWhatsApp} className="hover:text-blue-500 transition">Planos</button>
            <button onClick={openWhatsApp} className="hover:text-blue-500 transition">Benefícios</button>
            <button onClick={openWhatsApp} className="hover:text-blue-500 transition">Suporte</button>
            <button onClick={openWhatsApp} className="hover:text-blue-500 transition">Contato</button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col space-y-2 px-4 py-4 text-lg">
            <button onClick={openWhatsApp} className="text-left hover:text-blue-500 transition py-3">Home</button>
            <button onClick={openWhatsApp} className="text-left hover:text-blue-500 transition py-3">Planos</button>
            <button onClick={openWhatsApp} className="text-left hover:text-blue-500 transition py-3">Benefícios</button>
            <button onClick={openWhatsApp} className="text-left hover:text-blue-500 transition py-3">Suporte</button>
            <button onClick={openWhatsApp} className="text-left hover:text-blue-500 transition py-3">Contato</button>
          </nav>
        </div>
      )}
    </header>
  );
}
