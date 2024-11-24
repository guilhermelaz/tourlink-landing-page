import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
