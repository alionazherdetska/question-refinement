import React from 'react';
import { HelpCircle } from 'lucide-react';
import QuestionDisplay from '../QuestionDisplay';
import StationControls from '../StationControls';
import { MOTIVATION_OPTIONS } from '../../data/constants';
import { StationProps } from '../../types';

const MotivationStation: React.FC<StationProps> = ({ 
  questionData, 
  updateQuestionData, 
  onNext, 
  onBack, 
  onSkip, 
  canProceed,
  currentStation 
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm min-h-96">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
          <HelpCircle className="text-blue-600" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Motivation</h2>
      </div>

      <QuestionDisplay question={questionData.correctedQuestion} />

      <p className="text-gray-600 mb-6">What makes you ask this question? This helps us match you with the right researcher.</p>

      <div className="space-y-3 mb-6">
        {MOTIVATION_OPTIONS.map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="radio" 
              name="motivation"
              value={option.value}
              checked={questionData.motivation === option.value}
              onChange={(e) => updateQuestionData('motivation', e.target.value)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>

      {questionData.motivation === 'other' && (
        <textarea 
          placeholder="Please specify your motivation..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none h-24 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={questionData.otherMotivation || ''}
          onChange={(e) => updateQuestionData('otherMotivation', e.target.value)}
        />
      )}

      <StationControls 
        onBack={onBack}
        onNext={onNext}
        onSkip={onSkip}
        canProceedToNext={canProceed}
        currentStation={currentStation}
      />
    </div>
  );
};

export default MotivationStation;