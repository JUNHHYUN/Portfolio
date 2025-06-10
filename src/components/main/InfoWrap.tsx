import React from 'react';
import { teamIntro } from '../../data/teamData';
import TextWrap from './TextWrap';

const InfoWrap: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <TextWrap
          title={teamIntro.title}
          text={teamIntro.text}
        />
      </div>
    </div>
  );
};

export default InfoWrap;