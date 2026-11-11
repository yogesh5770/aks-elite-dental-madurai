import React from 'react';
import { SymptomTriage } from './SymptomTriage';

interface AlignmentQuizProps {
  onOpenAppointment: (treatment?: string) => void;
}

// Re-export SymptomTriage as AlignmentQuiz for backwards compatibility
export const AlignmentQuiz: React.FC<AlignmentQuizProps> = ({ onOpenAppointment }) => {
  return <SymptomTriage onOpenAppointment={onOpenAppointment} />;
};

export default AlignmentQuiz;
