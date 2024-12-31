import React from 'react';
import { QRCodeType } from '../../types/qr';
import { 
  Type, Link, Image, Calendar, UserCircle, Wifi, Phone, 
  Mail, Share2, CreditCard, MapPin, Code 
} from 'lucide-react';

const qrTypes: { type: QRCodeType; icon: React.FC; label: string }[] = [
  { type: 'text', icon: Type, label: 'Text' },
  { type: 'url', icon: Link, label: 'URL/Link' },
  { type: 'image', icon: Image, label: 'Image/File' },
  { type: 'event', icon: Calendar, label: 'Event' },
  { type: 'contact', icon: UserCircle, label: 'Contact' },
  { type: 'wifi', icon: Wifi, label: 'Wi-Fi' },
  { type: 'phone', icon: Phone, label: 'Phone' },
  { type: 'email', icon: Mail, label: 'Email' },
  { type: 'social', icon: Share2, label: 'Social Media' },
  { type: 'payment', icon: CreditCard, label: 'Payment' },
  { type: 'location', icon: MapPin, label: 'Location' },
  { type: 'custom', icon: Code, label: 'Custom' },
];

interface QRTypeSelectorProps {
  selectedType: QRCodeType;
  onTypeChange: (type: QRCodeType) => void;
}

const QRTypeSelector: React.FC<QRTypeSelectorProps> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {qrTypes.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`flex items-center p-4 rounded-lg border-2 transition-colors ${
            selectedType === type
              ? 'border-navy-blue bg-navy-blue text-white'
              : 'border-gray-200 hover:border-navy-blue'
          }`}
        >
          <Icon className="mr-2" size={20} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default QRTypeSelector;