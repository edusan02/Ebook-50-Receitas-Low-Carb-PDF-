import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AiSalesAssistant from './components/AiSalesAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50 text-stone-800 font-sans selection:bg-primary/30 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <AiSalesAssistant />
    </div>
  );
};

export default App;