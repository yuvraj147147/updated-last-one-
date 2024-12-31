import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { QRCodeData } from '../../types/qr';

interface QRPreviewProps {
  data: QRCodeData;
}

const QRPreview: React.FC<QRPreviewProps> = ({ data }) => {
  const getQRValue = () => {
    switch (data.type) {
      case 'email':
        const [email, subject, body] = data.content.split('|');
        return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      case 'phone':
        return `tel:${data.content}`;
      default:
        return data.content;
    }
  };

  const getSizeInPixels = () => {
    switch (data.style.size) {
      case 'small': return 128;
      case 'medium': return 256;
      case 'large': return 512;
      default: return 256;
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <QRCodeCanvas
          value={getQRValue()}
          size={getSizeInPixels()}
          level="H"
          fgColor={data.style.foregroundColor}
          bgColor={data.style.backgroundColor}
        />
      </div>
    </div>
  );
};

export default QRPreview;