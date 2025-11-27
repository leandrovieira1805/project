import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const phone = '5587996175314';
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [deviceType, setDeviceType] = useState<'celular' | 'tv' | null>(null);
  const [mobileOS, setMobileOS] = useState<'Android' | 'iOS' | null>(null);
  const [tvBrand, setTvBrand] = useState('');
  const [tvType, setTvType] = useState<'Smart' | 'Android' | null>(null);
  const canSubmit = () => {
    if (!name.trim() || !email.trim()) return false;
    if (!deviceType) return false;
    if (deviceType === 'celular' && !mobileOS) return false;
    if (deviceType === 'tv' && !tvType) return false;
    return true;
  };
  const submitTrial = () => {
    const base = 'Olá! Gostaria de fazer TESTE GRÁTIS.';
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
    setIsTrialOpen(false);
    setName('');
    setEmail('');
    setDeviceType(null);
    setMobileOS(null);
    setTvBrand('');
    setTvType(null);
  };

  return (
    <section id="home" className="relative bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/hero-iptv-bg.jpg')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <img
            src="/WhatsApp_Image_2025-11-26_at_06.44.43-removebg-preview.png"
            alt="Leandro IPTV Logo"
            className="mx-auto mb-6 h-24 sm:h-32 lg:h-40 w-auto drop-shadow-2xl"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Bem-vindo à <span className="text-green-400">Leandro IPTV</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Canais, filmes e séries em Full HD e 4K, sem travamentos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => setIsTrialOpen(true)}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5" />
              TESTE GRÁTIS
            </button>

            <a
              href="#planos"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      {isTrialOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-black">Teste Grátis</h3>
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
                onClick={() => setIsTrialOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-black"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={!canSubmit()}
                onClick={submitTrial}
                className={`px-4 py-2 rounded-lg font-bold ${canSubmit() ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-600'}`}
              >
                Enviar pelo WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
