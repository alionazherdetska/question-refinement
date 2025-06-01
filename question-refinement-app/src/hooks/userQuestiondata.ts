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
      case 1: return questionData.spellcheckAccepted;
      case 2: return questionData.isDifferent;
      case 3: return questionData.selectedAreas.length > 0;
      case 4: return questionData.motivation !== '';
      case 5: return true;
      default: return false;
    }
  };

  return {
    questionData,
    updateQuestionData,
    canProceed
  };
};