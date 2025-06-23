// ExpertSelectionStation.tsx - Enhanced with AI Recommendations
import React, { useState, useEffect } from 'react';
import { Users, AlertTriangle } from 'lucide-react';
import QuestionDisplay from '../QuestionDisplay';
import StationControls from '../StationControls';
import { getExpertsForQuestion } from '../../data/constants';
import { StationProps } from '../../types';

const ExpertSelectionStation: React.FC<StationProps> = ({
  questionData,
  updateQuestionData,
  onNext,
  onBack,
  onSkip,
  canProceed,
  currentStation
}) => {
  const [availableExperts, setAvailableExperts] = useState<any[]>([]);
  const [showTooManyExperts, setShowTooManyExperts] = useState(false);
  const [showBroadQuestionHint, setShowBroadQuestionHint] = useState(false);

  useEffect(() => {
    // Simulate AI filtering experts based on question
    const experts = getExpertsForQuestion(questionData.correctedQuestion);
    setAvailableExperts(experts);
    
    // If too many experts (>8), show hint about question being too broad
    if (experts.length > 8) {
      setShowTooManyExperts(true);
      setShowBroadQuestionHint(true);
    }
  }, [questionData.correctedQuestion]);

  const handleExpertSelection = (expertId: string): void => {
    updateQuestionData('selectedExpertId', expertId);
    updateQuestionData('expertSelected', true);
  };

  const handleMakeQuestionMoreSpecific = (): void => {
    // This would trigger a question refinement flow
    alert('Let\'s make your question more specific to find the perfect expert match.');
  };

  const selectedExpert = availableExperts.find(expert => expert.id === questionData.selectedExpertId);

  return (
    <div className="relative">
      {/* AI ENHANCEMENT ANNOTATION - POSITIONED OUTSIDE */}
      <div className="absolute -right-80 top-0 w-72 bg-gradient-to-br from-cyan-100 to-blue-50 border-2 border-cyan-300 rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">⭐</span>
          <strong className="text-cyan-800 text-lg">AI Can Be Added Here</strong>
        </div>
        <div className="space-y-2">
          <p className="text-black text-m font-semibold">
            ✨ Researcher Recommendation System
          </p>
          <p className="text-black text-s">
            • AI-powered recommendation system
          </p>
          <p className="text-black text-s">
            • Automatically matches questions with researchers
          </p>
          <p className="text-black text-s">
            • Displays recommended experts for the query
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm min-h-96">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
            <Users className="text-blue-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Expert Recommendations</h2>
        </div>

        <QuestionDisplay question={questionData.correctedQuestion} />

        {showBroadQuestionHint && (
          <div className="bg-rose-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-yellow-600" size={20} />
              <strong className="text-yellow-800">Your question might be too broad</strong>
            </div>
            <p className="text-yellow-700 text-sm mb-3">
              We found many experts who could answer this question. Making it more specific would help us find the perfect match.
            </p>
            <button
              onClick={handleMakeQuestionMoreSpecific}
              className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-medium hover:bg-yellow-200 transition-colors"
            >
              Make question more specific
            </button>
          </div>
        )}

        <p className="text-gray-600 mb-6">
          {showTooManyExperts 
            ? "We found several experts who could answer your question:"
            : "Select the expert you'd like to answer your question:"
          }
        </p>

        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
          {availableExperts.slice(0, showTooManyExperts ? 8 : availableExperts.length).map((expert) => (
            <div 
              key={expert.id}
              onClick={() => handleExpertSelection(expert.id)}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md relative ${
                questionData.selectedExpertId === expert.id
                  ? 'border-stone-700 bg-blue-50'
                  : 'border-gray-200 hover:border-stone-500'
              }`}
            >
              <div className="flex items-start gap-4">
                <img 
                  src={expert.avatar} 
                  alt={expert.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{expert.name}</h3>
                    <span className="text-sm text-gray-500">{expert.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{expert.institution}</p>
                  <p className="text-sm text-gray-700 mb-2">{expert.bio}</p>
                  <div className="flex flex-wrap gap-1">
                    {expert.specializations.map((spec: string) => (
                      <span 
                        key={spec}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedExpert && (
          <div className="bg-orange-100 border rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">✅</span>
              <strong className="text-stone-700">Expert Selected</strong>
            </div>
            <p className="text-stone-700 text-sm">
              Our editorial team will try to get your question answered by <strong>{selectedExpert.name}</strong>{' '}
              from {selectedExpert.institution}.
            </p>
          </div>
        )}

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

export default ExpertSelectionStation;
