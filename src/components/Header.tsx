import React from 'react';

const Header: React.FC = () => (
  <div className="bg-white border-b border-gray-200 mb-10">
    <nav className="max-w-6xl mx-auto py-4 flex justify-between items-center">
      <div className="brand-logo">
        <span style={{ color: 'black', fontWeight: '600', fontSize: '17px' }}>savoir</span>{' '}
        <span style={{ color: 'rgb(218, 41, 28)', fontWeight: '600', fontSize: '17px' }}>public</span>
      </div>
      <ul className="flex gap-8 text-gray-600 font-medium">
        <li><a href="#" className="hover:text-gray-900 transition-colors">Researchers</a></li>
        <li><a href="#" className="hover:text-gray-900 transition-colors">About us</a></li>
        <li><a href="#" className="hover:text-gray-900 transition-colors">Help</a></li>
        <li><a href="#" className="hover:text-gray-900 transition-colors">Join</a></li>
        <li><a href="#" className="hover:text-gray-900 transition-colors">EN</a></li>
      </ul>
    </nav>
  </div>
);

export default Header;