import React, { useState, useEffect } from 'react';
import { Target } from 'lucide-react';
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

  useEffect(() => {
    // Get the selected expert
    const selectedExpert = EXPERT_PROFILES.find(expert => expert.id === questionData.selectedExpertId);
    
    // Get semantically related knowledge areas based on expert + 2 random
    const semanticAreas = getSemanticKnowledgeAreas(selectedExpert);
    setAvailableAreas(semanticAreas);
  }, [questionData.selectedExpertId]);

  const toggleArea = (area: string): void => {
    const isSelected = questionData.selectedAreas.includes(area);
    const newAreas = isSelected
      ? questionData.selectedAreas.filter(a => a !== area)
      : [...questionData.selectedAreas, area];
    updateQuestionData('selectedAreas', newAreas);
  };

  const selectedExpert = EXPERT_PROFILES.find(expert => expert.id === questionData.selectedExpertId);

  return (
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
            className={`px-4 py-2 rounded-full border-2 transition-colors text-sm font-medium ${
              questionData.selectedAreas.includes(area)
                ? 'bg-blue-100 border-black text-blue-700'
                : 'bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100'
            }`}
          >
            {area}
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
  );
};

export default KnowledgeAreasStation;
