import React from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionSection from '../components/about/MissionSection';
import FeatureList from '../components/about/FeatureList';
import VisionSection from '../components/about/VisionSection';
import CallToAction from '../components/shared/CallToAction';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-400">
      <div className="container mx-auto px-4 py-12">
        <AboutHero />
        <div className="max-w-4xl mx-auto">
          <MissionSection />
          <FeatureList />
          <VisionSection />
          <div className="text-center mt-12">
            <CallToAction text="Start Creating Your QR Code" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;