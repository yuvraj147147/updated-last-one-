import React, { useState } from 'react';
import QRTypeSelector from '../components/qr/QRTypeSelector';
import QRStyleCustomizer from '../components/qr/QRStyleCustomizer';
import QRContentInput from '../components/qr/QRContentInput';
import QRPreview from '../components/qr/QRPreview';
import { QRCodeData, QRCodeType, QRCodeStyle } from '../types/qr';

const Generator: React.FC = () => {
  const [qrData, setQrData] = useState<QRCodeData>({
    type: 'url',
    content: '',
    style: {
      dotStyle: 'squares',
      gradient: 'none',
      borderStyle: 'none',
      foregroundColor: '#000000',
      backgroundColor: '#ffffff',
      size: 'medium',
      format: 'png'
    }
  });

  const handleTypeChange = (type: QRCodeType) => {
    setQrData({ ...qrData, type, content: '' });
  };

  const handleContentChange = (content: string) => {
    setQrData({ ...qrData, content });
  };

  const handleStyleChange = (style: QRCodeStyle) => {
    setQrData({ ...qrData, style });
  };

  return (
    <div className="min-h-screen bg-yellow-400">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy-blue text-center mb-8">
          Create Your QR Code
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">1. Choose QR Code Type</h2>
              <QRTypeSelector
                selectedType={qrData.type}
                onTypeChange={handleTypeChange}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">2. Enter Content</h2>
              <QRContentInput
                type={qrData.type}
                content={qrData.content}
                onContentChange={handleContentChange}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">3. Customize Style</h2>
              <QRStyleCustomizer
                style={qrData.style}
                onStyleChange={handleStyleChange}
              />
            </div>
          </div>

          <div className="md:sticky md:top-4 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <QRPreview data={qrData} />
            </div>

            <button
              className="w-full bg-navy-blue text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-navy-blue-dark transition-colors"
              onClick={() => {/* Implement download logic */}}
            >
              Download QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;