// KnowledgeAreasStation.tsx - Enhanced with AI Classification
import React, { useState, useEffect } from 'react';
import { Target, Lightbulb } from 'lucide-react';
import QuestionDisplay from '../QuestionDisplay';
import StationControls from '../StationControls';
import { EXPERT_PROFILES, getSemanticKnowledgeAreas } from '../../data/constants';
import { StationProps } from '../../types';

const KnowledgeAreasStation: React.FC<StationProps> = ({
  questionData,
  updateQuestionData,
  onNext,
  onBack,
  onSkip,
  canProceed,
  currentStation
}) => {
  const [availableAreas, setAvailableAreas] = useState<string[]>([]);
  const [aiSuggestedAreas, setAiSuggestedAreas] = useState<string[]>([]);

  useEffect(() => {
    // Get the selected expert
    const selectedExpert = EXPERT_PROFILES.find(expert => expert.id === questionData.selectedExpertId);
    
    // Get semantically related knowledge areas based on expert + 2 random
    const semanticAreas = getSemanticKnowledgeAreas(selectedExpert);
    setAvailableAreas(semanticAreas);
    
    // AI suggests the first 2-3 areas automatically
    setAiSuggestedAreas(semanticAreas.slice(0, 3));
  }, [questionData.selectedExpertId]);

  const toggleArea = (area: string): void => {
    const isSelected = questionData.selectedAreas.includes(area);
    const newAreas = isSelected
      ? questionData.selectedAreas.filter(a => a !== area)
      : [...questionData.selectedAreas, area];
    updateQuestionData('selectedAreas', newAreas);
  };

  const handleRefineQuestion = (): void => {
    const refinedQuestion = "Why is mercury liquid at room temperature from a thermodynamic perspective?";
    updateQuestionData('correctedQuestion', refinedQuestion);
  };

  const selectedExpert = EXPERT_PROFILES.find(expert => expert.id === questionData.selectedExpertId);

  return (
    <div className="relative">
      {/* AI ENHANCEMENT ANNOTATION - POSITIONED OUTSIDE */}
      <div className="absolute -right-80 top-0 w-72 bg-gradient-to-br from-cyan-100 to-blue-50 border-2 border-cyan-300 rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🏷️</span>
          <strong className="text-cyan-800 text-lg">AI Can Be Added Here</strong>
        </div>
        <div className="space-y-2">
          <p className="text-black text-l font-semibold">
            ✨ Knowledge Area Selection
          </p>
          <p className="text-black text-s">
            • User defines topics manually
          </p>
          <p className="text-black text-s">
            • AI automatically tags and classifies topics in backend
          </p>
          <p className="text-black text-s">
            • Future: Use topics to improve question or prompt user for specificity
          </p>
        </div>
      </div>

      <div className="relative">
        {/* AI ENHANCEMENT ANNOTATION - POSITIONED OUTSIDE */}
        <div className="absolute -left-80 top-0 w-72 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-5 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <strong className="text-cyan-800 text-lg">POSSIBLE ENHANCEMENT</strong>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="text-amber-600" size={16} />
            <strong className="text-amber-800">Future Enhancement Preview</strong>
          </div>
          <p className="text-amber-700 text-sm pb-2">
            "Based on your selected topics, would you like to make your question more specific?
          </p>
          <p>For example: 'Why is mercury liquid at room temperature from a thermodynamic perspective?'"</p>
          <button 
            onClick={handleRefineQuestion}
            className="mt-2 px-3 py-1 bg-black text-white rounded text-sm hover:bg-gray-600 transition-colors"
          >
            Refine Question 
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm min-h-96">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
            <Target className="text-blue-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Knowledge Areas</h2>
        </div>

        <QuestionDisplay question={questionData.correctedQuestion} />

        {selectedExpert && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800 text-sm">
              <strong>Selected Expert:</strong> {selectedExpert.name} from {selectedExpert.institution}
            </p>
            <p className="text-blue-700 text-xs mt-1">
              Knowledge areas have been filtered based on their expertise
            </p>
          </div>
        )}

        <p className="text-gray-600 mb-4">
          Which research areas are relevant to your question? Please select at least one field:
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {availableAreas.map((area) => (
            <button
              key={area}
              onClick={() => toggleArea(area)}
              className={`px-4 py-2 rounded-full border-2 transition-colors text-sm font-medium relative ${
                questionData.selectedAreas.includes(area)
                  ? 'bg-blue-100 border-black text-blue-700'
                  : 'bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100'
              }`}
            >
              {area}
              {aiSuggestedAreas.includes(area) && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
              )}
            </button>
          ))}
        </div>

        {questionData.selectedAreas.length > 0 && (
          <div className="bg-rose-50 border rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">👨‍🔬</span>
              <strong className="text-gray-800">Your question will be enhanced with expertise from:</strong>
            </div>
            <div className="text-gray-700">{questionData.selectedAreas.join(', ')}</div>
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

export default KnowledgeAreasStation;