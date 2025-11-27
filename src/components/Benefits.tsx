import { Tv2, Film, Zap, HeadphonesIcon, Smartphone, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Tv2,
    title: "Canais em Full HD/4K",
    description: "Qualidade de imagem impecável para você assistir seus programas favoritos"
  },
  {
    icon: Film,
    title: "Filmes e Séries Atualizados",
    description: "Catálogo sempre atualizado com os últimos lançamentos"
  },
  {
    icon: Zap,
    title: "Zero Travamentos",
    description: "Servidores de alta performance garantem streaming sem interrupções"
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte 24h",
    description: "Equipe disponível todos os dias para ajudar você"
  },
  {
    icon: Smartphone,
    title: "Multiplataforma",
    description: "Compatível com TV, Celular, PC e TV Box"
  },
  {
    icon: CheckCircle,
    title: "Garantia de Qualidade",
    description: "Satisfação garantida ou seu dinheiro de volta"
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Por que escolher a <span className="text-green-500">Leandro IPTV</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos a melhor experiência em streaming de TV ao vivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
