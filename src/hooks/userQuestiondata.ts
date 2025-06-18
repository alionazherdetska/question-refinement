import { useState } from 'react';
import { QuestionData } from '../types';

interface UseQuestionDataReturn {
  questionData: QuestionData;
  updateQuestionData: (key: keyof QuestionData, value: any) => void;
  canProceed: (currentStation: number) => boolean;
}

export const useQuestionData = (): UseQuestionDataReturn => {
  const [questionData, setQuestionData] = useState<QuestionData>({
    originalQuestion: "Why is mercary liquid at room temperature?",
    correctedQuestion: "Why is mercury liquid at room temperature?",
    spellcheckAccepted: false,
    isDifferent: false,
    selectedExpertId: undefined,
    expertSelected: false,
    selectedAreas: [],
    motivation: '',
    otherMotivation: '',
    granularity: 3
  });

  const updateQuestionData = (key: keyof QuestionData, value: any): void => {
    setQuestionData(prev => ({ ...prev, [key]: value }));
  };

  const canProceed = (currentStation: number): boolean => {
    switch (currentStation) {
      case 1: // Spellcheck
        return questionData.spellcheckAccepted;
      case 2: // Already Answered
        return questionData.isDifferent;
      case 3: // Expert Selection
        return questionData.expertSelected && !!questionData.selectedExpertId;
      case 4: // Knowledge Areas
        return questionData.selectedAreas.length > 0;
      case 5: // Motivation
        return questionData.motivation !== '' && 
               (questionData.motivation !== 'other' || !!questionData.otherMotivation);
      case 6: // Granularity
        return true;
      default: 
        return false;
    }
  };

  return {
    questionData,
    updateQuestionData,
    canProceed
  };
};
