import React from 'react';
import { STATIONS } from '../data/constants';
import { ProgressBarProps } from '../types';

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStation }) => {
  // Calculate progress: (currentStation - 1) / (totalStations - 1) to ensure it ends at 100% on the last station
  const totalStations = STATIONS.length - 1; // Subtract 1 because we don't count the "Start" station (id: 0)
  const progressPercentage = currentStation === 1 ? 0 : ((currentStation - 1) / (totalStations - 1)) * 100;
  
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <div className="flex justify-between relative">
        {/* Progress line */}
                 <div className="absolute top-5 left-0 right-3 h-0.5 z-10" style={{ backgroundColor: 'rgb(191, 219, 254)' }}></div>
        <div 
          className="absolute top-5 left-0 h-0.5 bg-rose-200 z-20 transition-all duration-300"
          style={{ width: `${progressPercentage})`, backgroundColor: 'rgb(243, 211, 208 )' }}
        ></div>
             
        {STATIONS.map((station) => (
          <div key={station.id} className="flex flex-col items-center z-30 rounded-lg">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all duration-300 ${
              station.id < currentStation
                ? 'bg-rose-200 text-black'
                : station.id === currentStation
                ? 'bg-blue-200 text-black'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {station.id < currentStation ? '✓' : station.id === 0 ? '✓' : station.id}
            </div>
            <div className={`text-xs text-center max-w-20 ${
              station.id === currentStation ? 'text-gray-600 font-semibold' : 'text-black-300'
            }`}>
              {station.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;