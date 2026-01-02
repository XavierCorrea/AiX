
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Statement />
      <Hero />
      <HowItWorks />
      <Services />
      <Benefits />
      <FAQ />
      <DemoForm />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
