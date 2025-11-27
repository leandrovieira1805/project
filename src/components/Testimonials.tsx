import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Melhor IPTV que já contratei! Imagem perfeita, nunca trava e o suporte é muito rápido. Recomendo demais!"
  },
  {
    name: "Maria Oliveira",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Estou adorando! Todos os canais que eu queria, filmes atualizados e funciona perfeitamente no meu celular e TV."
  },
  {
    name: "João Santos",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Excelente custo-benefício. Muito melhor que TV a cabo e muito mais barato. Já indiquei para toda família!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            O que dizem nossos <span className="text-blue-600">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Milhares de clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
