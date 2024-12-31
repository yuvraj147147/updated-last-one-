import React from 'react';
import FeatureHero from '../components/features/FeatureHero';
import FeatureGrid from '../components/features/FeatureGrid';
import CallToAction from '../components/shared/CallToAction';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-400">
      <div className="container mx-auto px-4 py-12">
        <FeatureHero />
        <FeatureGrid />
        <div className="text-center mt-12">
          <CallToAction text="Get Started Now" link="/generator" />
        </div>
      </div>
    </div>
  );
};

export default Features;