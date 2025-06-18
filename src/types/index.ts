export interface QuestionData {
  originalQuestion: string;
  correctedQuestion: string;
  spellcheckAccepted: boolean;
  isDifferent: boolean;
  selectedExpertId?: string;
  expertSelected: boolean;
  selectedAreas: string[];
  motivation: string;
  otherMotivation?: string;
  granularity: number;
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

export interface ProgressBarProps {
  currentStation: number;
}

export interface QuestionDisplayProps {
  question: string;
  highlight?: boolean;
}

export interface ExpertProfile {
  id: string;
  name: string;
  title: string;
  institution: string;
  avatar: string;
  bio: string;
  specializations: string[];
  relevantKeywords: string[];
}
