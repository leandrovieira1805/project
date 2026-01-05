import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const whatsappLink = `https://wa.me/5587996175314?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os planos.')}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src="/flow-tv-logo.jpeg"
                alt="Flow TV Logo"
                className="h-18 sm:h-20 w-auto mb-4 drop-shadow-xl"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A melhor experiência em streaming de TV ao vivo, filmes e séries.
              Qualidade premium com preços acessíveis.
            </p>
            <div className="flex space-x-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#planos" className="text-gray-400 hover:text-white transition">Planos</a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition">Benefícios</a>
              </li>
            </ul>
          </div>

          <div id="suporte">
            <h3 className="text-xl font-bold mb-6 text-green-400">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">WhatsApp</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition"
                  >
                    (87) 99617-5314
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:contato@leandroiptv.com" className="text-white hover:text-green-400 transition">
                    contato@leandroiptv.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Flow TV Internet Ilimitada. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Suporte disponível 24 horas por dia, 7 dias por semana.
          </p>
        </div>
      </div>
    </footer>
  );
}
