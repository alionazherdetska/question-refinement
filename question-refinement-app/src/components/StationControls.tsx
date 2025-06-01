import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StationControlsProps } from '../types';

const StationControls: React.FC<StationControlsProps> = ({ 
  onBack, 
  onNext, 
  onSkip, 
  canProceedToNext, 
  currentStation,
  isLastStation = false 
}) => (
  <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
    <button 
      onClick={onBack}
      disabled={currentStation === 1}
      className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-lg font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <ChevronLeft size={16} /> Back
    </button>
    
    <button 
      onClick={onSkip}
      className="text-gray-500 text-sm underline hover:text-gray-700 transition-colors"
    >
      Skip refinement
    </button>
    
    <button 
      onClick={onNext}
      disabled={!canProceedToNext}
      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLastStation ? 'Submit Question' : 'Next'} <ChevronRight size={16} />
    </button>
  </div>
);

export default StationControls;