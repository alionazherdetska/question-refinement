import React from 'react';
import { STATIONS } from '../data/constants';
import { ProgressBarProps } from '../types';

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStation }) => (
  <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
    <div className="flex justify-between relative">
      {/* Progress line */}
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-10"></div>
      <div 
        className="absolute top-4 left-0 h-0.5 bg-green-500 z-20 transition-all duration-300"
        style={{ width: `${(currentStation / 5) * 100}%` }}
      ></div>
      
      {STATIONS.map((station) => (
        <div key={station.id} className="flex flex-col items-center z-30 bg-gray-50 px-2 rounded-lg">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all duration-300 ${
            station.id < currentStation 
              ? 'bg-green-500 text-white' 
              : station.id === currentStation 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-600'
          }`}>
            {station.id < currentStation ? '✓' : station.id === 0 ? '✓' : station.id}
          </div>
          <div className={`text-xs text-center max-w-20 ${
            station.id === currentStation ? 'text-blue-600 font-semibold' : 'text-gray-600'
          }`}>
            {station.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProgressBar;