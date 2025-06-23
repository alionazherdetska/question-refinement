// AlreadyAnsweredStation.tsx - Enhanced with AI Question Similarity
import React from 'react';
import { Search, User } from 'lucide-react';
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
    <div className="relative">
      {/* AI ENHANCEMENT ANNOTATION - POSITIONED OUTSIDE */}
      <div className="absolute -left-80 top-0 w-72 bg-gradient-to-br from-cyan-100 to-blue-50 border-2 border-cyan-300 rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🧠</span>
          <strong className="text-cyan-800 text-lg">AI Can Be Added Here</strong>
        </div>
        <div className="space-y-2">
          <p className="text-black text-m font-semibold">
            ✨ Intelligent Question Similarity Matching
          </p>
          <p className="text-black text-s">
            • AI searches for similar keywords/knowledge areas
          </p>
          <p className="text-black text-s">
            • Displays related questions with researchers
          </p>
          <p className="text-black text-s">
            • Shows who answered previous questions
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm min-h-96">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
            <Search className="text-blue-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Similar Questions</h2>
        </div>

        <p className="text-gray-600 mb-6">We found similar questions that have already been answered:</p>

        <div className="space-y-4 mb-6">
          {SIMILAR_QUESTIONS.map((q, index) => (
            <div key={index} className="border border-slate-200 bg-slate-50 rounded-lg p-4 hover:border-teal-300 hover:bg-teal-25 hover:shadow-sm transition-all cursor-pointer">
              <div className="font-semibold text-gray-900 mb-2 text-lg">{q.title}</div>
              <div className="text-gray-700 text-sm mb-3 leading-relaxed">{q.answer}</div>
              {/* AI ENHANCEMENT: Show researcher info */}
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <User size={14} className="text-teal-600" />
                  <span>Answered by: Dr. Sarah Chen, MIT</span>
                </div>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                  Physical Chemistry
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={questionData.isDifferent}
              onChange={(e) => updateQuestionData('isDifferent', e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-blue-800 font-medium">My question is different and needs a new answer</span>
          </label>
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

export default AlreadyAnsweredStation;
