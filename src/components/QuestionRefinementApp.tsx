import React, { useState } from 'react';
import Header from './Header';
import ProgressBar from './ProgressBar';
import AlreadyAnsweredStation from './stations/AlreadyAnsweredStation';
import KnowledgeAreasStation from './stations/KnowledgeAreasStation';
import MotivationStation from './stations/MotivationStation';
import GranularityStation from './stations/GranularityStation';
import { useQuestionData } from '../hooks/userQuestiondata';
import SpellcheckStation from './stations/SpellCheckStation';

const QuestionRefinementApp: React.FC = () => {
  const [currentStation, setCurrentStation] = useState<number>(1);
  const { questionData, updateQuestionData, canProceed } = useQuestionData();

  const nextStation = (): void => {
    if (currentStation < 5 && canProceed(currentStation)) {
      setCurrentStation(prev => prev + 1);
    }
  };

  const previousStation = (): void => {
    if (currentStation > 1) {
      setCurrentStation(prev => prev - 1);
    }
  };

  const skipRefinement = (): void => {
    alert('Question will be sent directly to our researchers.');
  };

  const renderCurrentStation = (): JSX.Element => {
    const commonProps = {
      questionData,
      updateQuestionData,
      onNext: nextStation,
      onBack: previousStation,
      onSkip: skipRefinement,
      canProceed: canProceed(currentStation),
      currentStation
    };

    switch (currentStation) {
      case 1:
        return <SpellcheckStation {...commonProps} />;
      case 2:
        return <AlreadyAnsweredStation {...commonProps} />;
      case 3:
        return <KnowledgeAreasStation {...commonProps} />;
      case 4:
        return <MotivationStation {...commonProps} />;
      case 5:
        return <GranularityStation {...commonProps} />;
      default:
        return <SpellcheckStation {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-8 pb-12">
        <ProgressBar currentStation={currentStation} />
        {renderCurrentStation()}
      </div>
    </div>
  );
};

export default QuestionRefinementApp;