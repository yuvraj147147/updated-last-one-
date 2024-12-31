import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-navy-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <QrCode size={24} />
          <span>SuperSkyQR</span>
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link to="/features" className="hover:text-yellow-300 transition-colors">Features</Link>
          <Link to="/pricing" className="hover:text-yellow-300 transition-colors">Pricing</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;