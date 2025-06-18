import React from 'react';
import { QuestionDisplayProps } from '../types';


const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, highlight = false }) => (
  <div className="bg-gray-50 rounded-r-lg p-4 mb-8" style={{ borderLeft: '4px solid rgb(200, 220, 233)' }}>
    <strong className="text-gray-800">Your question:</strong><br />
    <span className="text-gray-700">
      {highlight ? (
        <span dangerouslySetInnerHTML={{ __html: question }} />
      ) : (
        question
      )}
    </span>
  </div>
);

export default QuestionDisplay;