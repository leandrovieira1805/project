import { Check, Crown } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: "Plano Mensal",
    price: "25",
    period: "mês",
    features: [
      "Todos os canais em HD",
      "Filmes e séries",
      "Suporte por WhatsApp",
      "1 tela simultânea"
    ],
    highlighted: false
  },
  {
    name: "Plano 3 Meses",
    price: "60",
    period: "3 meses",
    popular: true,
    features: [
      "Todos os canais em Full HD",
      "Filmes e séries premium",
      "Suporte prioritário 24h",
      "1 telas simultâneas",
      "Melhor custo-benefício"
    ],
    highlighted: true
  },
  {
    name: "Plano Anual",
    price: "199",
    period: "ano",
    features: [
      "Todos os canais em 4K",
      "Streaming premium liberado",
      "Suporte VIP 24h",
      "1 telas simultâneas",
      "Todos os benefícios"
    ],
    highlighted: false
  }
];

type DeviceType = 'celular' | 'tv';
type MobileOS = 'Android' | 'iOS';
type TvType = 'Smart' | 'Android';

function PlanCard({
  plan,
  onChoose,
}: {
  plan: {
    name: string;
    price: string;
    period: string;
    features: string[];
    highlighted?: boolean;
    popular?: boolean;
  };
  onChoose: (plan: { name: string; price: string; period: string }) => void;
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 ${
        plan.highlighted
          ? 'bg-gradient-to-br from-green-600 to-green-700 text-white shadow-2xl scale-105 border-4 border-green-400'
          : 'bg-white text-black shadow-lg border-2 border-gray-200'
      } transition transform hover:scale-105`}
    >
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <div className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-1 shadow-lg">
            <Crown className="h-4 w-4" />
            MAIS POPULAR
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-bold">R$</span>
          <span className="text-6xl font-bold">{plan.price}</span>
        </div>
        <p className={`text-lg mt-2 ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
          por {plan.period}
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className={`h-6 w-6 flex-shrink-0 ${plan.highlighted ? 'text-green-200' : 'text-green-600'}`} />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onChoose({ name: plan.name, price: plan.price, period: plan.period })}
        className={`block w-full text-center py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 ${
          plan.highlighted
            ? 'bg-white text-green-600 hover:bg-gray-100'
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        Assinar Agora
      </button>
    </div>
  );
}

export default function Plans() {
  const phone = '5587996175314';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string; period: string } | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
  const [mobileOS, setMobileOS] = useState<MobileOS | null>(null);
  const [tvBrand, setTvBrand] = useState('');
  const [tvType, setTvType] = useState<TvType | null>(null);

  const resetModal = () => {
    setName('');
    setEmail('');
    setDeviceType(null);
    setMobileOS(null);
    setTvBrand('');
    setTvType(null);
  };
  const openModal = (plan: { name: string; price: string; period: string }) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    resetModal();
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const canSubmit = () => {
    if (!selectedPlan) return false;
    if (!name.trim() || !email.trim()) return false;
    if (!deviceType) return false;
    if (deviceType === 'celular' && !mobileOS) return false;
    if (deviceType === 'tv' && !tvType) return false;
    return true;
  };
  const submitWhatsApp = () => {
    if (!selectedPlan) return;
    const base = `Olá! Tenho interesse no ${selectedPlan.name} por R$ ${selectedPlan.price} / ${selectedPlan.period}.`;
    const identity = ` Nome: ${name}. Email: ${email}.`;
    let deviceInfo = '';
    if (deviceType === 'celular') {
      deviceInfo = ` Dispositivo: Celular${mobileOS ? ` (${mobileOS})` : ''}.`;
    } else if (deviceType === 'tv') {
      deviceInfo = ` Dispositivo: TV${tvType ? ` (${tvType})` : ''}${tvBrand ? `, Marca: ${tvBrand}` : ''}.`;
    }
    const message = encodeURIComponent(base + identity + deviceInfo);
    const link = `https://wa.me/${phone}?text=${message}`;
    window.open(link, '_blank');
    closeModal();
  };

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Escolha seu <span className="text-green-500">Plano</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis para você aproveitar o melhor da TV
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} onChoose={openModal} />
          ))}
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-black">Finalizar assinatura</h3>
              {selectedPlan && (
                <p className="mb-4 text-gray-700">Plano selecionado: <span className="font-semibold">{selectedPlan.name}</span> — R$ {selectedPlan.price} / {selectedPlan.period}</p>
              )}
              <div className="grid grid-cols-1 gap-3 mb-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-black placeholder-gray-500"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu email"
                  type="email"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-black placeholder-gray-500"
                />
              </div>
              <p className="font-semibold text-gray-800">Dispositivo</p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setDeviceType('celular');
                    setTvType(null);
                  }}
                  className={`px-3 py-2 rounded-lg border ${deviceType === 'celular' ? 'bg-green-600 text-white border-green-600' : 'border-gray-300 text-black'}`}
                >
                  Celular
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDeviceType('tv');
                    setTvType('Smart');
                    setMobileOS(null);
                  }}
                  className={`px-3 py-2 rounded-lg border ${deviceType === 'tv' ? 'bg-green-600 text-white border-green-600' : 'border-gray-300 text-black'}`}
                >
                  TV
                </button>
              </div>
              {deviceType === 'celular' && (
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileOS('Android')}
                    className={`px-3 py-2 rounded-lg border ${mobileOS === 'Android' ? 'bg-green-600 text-white border-green-600' : 'border-gray-300 text-black'}`}
                  >
                    Android
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileOS('iOS')}
                    className={`px-3 py-2 rounded-lg border ${mobileOS === 'iOS' ? 'bg-green-600 text-white border-green-600' : 'border-gray-300 text-black'}`}
                  >
                    iOS
                  </button>
                </div>
              )}
              {deviceType === 'tv' && (
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    value={tvBrand}
                    onChange={(e) => setTvBrand(e.target.value)}
                    placeholder="Marca da TV"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-black placeholder-gray-500"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setTvType('Smart')}
                      className={`px-3 py-2 rounded-lg border ${tvType === 'Smart' ? 'bg-green-600 text-white border-green-600' : 'border-gray-300 text-black'}`}
                    >
                      Smart
                    </button>
                    <button
                      type="button"
                      onClick={() => setTvType('Android')}
                      className={`px-3 py-2 rounded-lg border ${tvType === 'Android' ? 'bg-green-600 text-white border-green-600' : 'border-gray-300 text-black'}`}
                    >
                      Android
                    </button>
                  </div>
                </div>
              )}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-black"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  disabled={!canSubmit()}
                  onClick={submitWhatsApp}
                  className={`px-4 py-2 rounded-lg font-bold ${canSubmit() ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-600'}`}
                >
                  Enviar pelo WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
