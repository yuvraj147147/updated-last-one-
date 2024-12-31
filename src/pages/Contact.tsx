import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactSection from '../components/contact/ContactSection';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-400">
      <div className="container mx-auto px-4 py-12">
        <ContactHero />
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;