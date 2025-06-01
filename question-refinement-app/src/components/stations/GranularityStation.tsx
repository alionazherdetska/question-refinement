import React from 'react';
import { BarChart3 } from 'lucide-react';
import QuestionDisplay from '../QuestionDisplay';
import StationControls from '../StationControls';
import { GRANULARITY_LABELS } from '../../data/constants';
import { StationProps } from '../../types';

const GranularityStation: React.FC<StationProps> = ({ 
  questionData, 
  updateQuestionData, 
  onNext, 
  onBack, 
  onSkip, 
  canProceed,
  currentStation 
}) => {
  const handleSubmit = (): void => {
    alert('Question submitted to researchers! Thank you for using our refinement system.');
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm min-h-96">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
          <BarChart3 className="text-blue-600" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Question Granularity</h2>
      </div>

      <QuestionDisplay question={questionData.correctedQuestion} />

      <p className="text-gray-600 mb-6">How detailed would you like the answer to be?</p>

      <div className="mb-8">
        <input 
          type="range" 
          min="1" 
          max="5" 
          value={questionData.granularity}
          onChange={(e) => updateQuestionData('granularity', parseInt(e.target.value))}
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Broad overview</span>
          <span>Specific detail</span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <strong className="text-gray-800">Answer style: </strong>
        <span className="text-gray-700">
          {GRANULARITY_LABELS[questionData.granularity]}
        </span>
      </div>

      <StationControls 
        onBack={onBack}
        onNext={handleSubmit}
        onSkip={onSkip}
        canProceedToNext={canProceed}
        currentStation={currentStation}
        isLastStation={true}
      />
    </div>
  );
};

export default GranularityStation;