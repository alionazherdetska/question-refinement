import { Check, Search, Target, HelpCircle, BarChart3 } from 'lucide-react';
import { Station, SimilarQuestion, MotivationOption } from '../types';

export const STATIONS: Station[] = [
  { id: 0, label: "Enter Question", icon: "✓" },
  { id: 1, label: "Spellcheck", icon: Check },
  { id: 2, label: "Already Answered?", icon: Search },
  { id: 3, label: "Knowledge Areas", icon: Target },
  { id: 4, label: "Motivation", icon: HelpCircle },
  { id: 5, label: "Granularity", icon: BarChart3 }
];

export const KNOWLEDGE_AREAS: string[] = [
  "Chemistry", 
  "Physics", 
  "Materials Science", 
  "Metallurgy", 
  "Thermodynamics", 
  "Quantum Mechanics", 
  "Atomic Physics", 
  "Crystallography"
];

export const SIMILAR_QUESTIONS: SimilarQuestion[] = [
  {
    title: "Why is mercury liquid?",
    answer: "Mercury is held together by weak Van der Waals forces. Therefore, the melting point of mercury is so low."
  },
  {
    title: "Why are some metals solid at room temperature and others liquid?",
    answer: "The states of matter of metals depend on their atomic binding forces..."
  }
];

export const MOTIVATION_OPTIONS: MotivationOption[] = [
  { value: 'curiosity', label: 'Personal curiosity' },
  { value: 'academic', label: 'Academic research' },
  { value: 'professional', label: 'Professional need' },
  { value: 'other', label: 'Other' }
];

export const GRANULARITY_LABELS: Record<number, string> = {
  1: "Simple, easy-to-understand explanation",
  2: "General explanation with some detail",
  3: "Balanced explanation with examples",
  4: "Detailed scientific explanation",
  5: "Comprehensive technical analysis"
};