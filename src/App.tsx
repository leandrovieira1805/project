import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
