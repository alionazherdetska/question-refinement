import React from 'react';
import { Search } from 'lucide-react';
import QuestionDisplay from '../QuestionDisplay';
import StationControls from '../StationControls';
import { SIMILAR_QUESTIONS } from '../../data/constants';
import { StationProps } from '../../types';

const AlreadyAnsweredStation: React.FC<StationProps> = ({ 
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
          <Search className="text-blue-600" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Already Answered?</h2>
      </div>

      <QuestionDisplay question={questionData.correctedQuestion} />

      <p className="text-gray-600 mb-6">We found similar questions that have already been answered:</p>

      <div className="space-y-4 mb-6">
        {SIMILAR_QUESTIONS.map((q, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
            <div className="font-semibold text-gray-900 mb-2">{q.title}</div>
            <div className="text-gray-600 text-sm">{q.answer}</div>
          </div>
        ))}
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input 
          type="checkbox" 
          checked={questionData.isDifferent}
          onChange={(e) => updateQuestionData('isDifferent', e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <span className="text-gray-700">My question is different and needs a new answer</span>
      </label>

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

export default AlreadyAnsweredStation;