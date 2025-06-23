import React from 'react';
import { Check, Globe } from 'lucide-react';
import QuestionDisplay from '../QuestionDisplay';
import StationControls from '../StationControls';
import { StationProps } from '../../types';

const SpellcheckStation: React.FC<StationProps> = ({ 
  updateQuestionData, 
  onNext, 
  onBack, 
  onSkip, 
  canProceed,
  currentStation 
}) => {
  const handleAcceptCorrection = (): void => {
    updateQuestionData('spellcheckAccepted', true);
    updateQuestionData('correctedQuestion', 'Why is mercury liquid at room temperature?');
  };

  const handleRejectCorrection = (): void => {
    updateQuestionData('spellcheckAccepted', true);
  };

  return (
    <div className="relative">
      <div className="absolute -right-80 top-0 w-72 bg-gradient-to-br from-cyan-100 to-blue-50 border-2 border-cyan-300 rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🤖</span>
          <strong className="text-cyan-800 text-lg">AI Can Be Added Here</strong>
        </div>
        <div className="space-y-2">
          <p className="text-black text-m font-semibold">
            ✨ Spellcheck and Language Detection
          </p>
          <p className="text-black text-s">
            • User defines the language preference
          </p>
          <p className="text-black text-s">
            • AI detects Italian/French/German and informs user
          </p>
          <p className="text-black text-s">
            • AI detects Swiss German and suggests switching to High German
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm min-h-96">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
            <Check className="text-blue-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Spellcheck & Language Detection</h2>
        </div>

        <QuestionDisplay 
          question='Why is <span style="background: #fef2f2; color: #dc2626; padding: 2px 4px; border-radius: 4px;">mercary</span> liquid at room temperature?'
          highlight={true}
        />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="text-blue-600" size={16} />
            <strong className="text-blue-800">Language Detection</strong>
          </div>
          <p className="text-blue-700 text-sm">
            Language detected: <strong>English</strong>
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">We found a possible spelling error:</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="mb-4">
              <strong>Did you mean:</strong> "mercury" instead of 
              <span className="bg-red-100 text-red-700 px-1 rounded mx-1">mercary</span>?
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handleAcceptCorrection}
                className="px-4 py-2 bg-stone-700 text-white rounded-lg font-semibold hover:bg-stone-500 transition-colors"
              >
                Accept correction
              </button>
              <button 
                onClick={handleRejectCorrection}
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-semibold hover:bg-gray-200 hover:border-stone-500 border border-transparent transition-colors"
              >
                Keep original spelling
              </button>
            </div>
          </div>
        </div>

        <StationControls 
          onBack={onBack}
          onNext={onNext}
          onSkip={onSkip}
          canProceedToNext={canProceed}
          currentStation={currentStation}
        />
      </div>
    </div>
  );
};

export default SpellcheckStation;
