import { LucideIcon } from 'lucide-react';

export interface QuestionData {
  originalQuestion: string;
  correctedQuestion: string;
  spellcheckAccepted: boolean;
  isDifferent: boolean;
  selectedAreas: string[];
  motivation: string;
  otherMotivation?: string;
  granularity: number;
}

export interface Station {
  id: number;
  label: string;
  icon: LucideIcon | string;
}

export interface SimilarQuestion {
  title: string;
  answer: string;
}

export interface MotivationOption {
  value: string;
  label: string;
}

export interface StationProps {
  questionData: QuestionData;
  updateQuestionData: (key: keyof QuestionData, value: any) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
  canProceed: boolean;
  currentStation: number;
}

export interface StationControlsProps {
  onBack: () => void;
  onNext: () => void;
  onSkip: () => void;
  canProceedToNext: boolean;
  currentStation: number;
  isLastStation?: boolean;
}

export interface QuestionDisplayProps {
  question: string;
  highlight?: boolean;
}

export interface ProgressBarProps {
  currentStation: number;
}