import React from 'react';

interface TeamIntroProps {
  teamAboutData: {
    title: string;
    subtitle: string;
    text: string;
  };
}

const TeamIntro: React.FC<TeamIntroProps> = ({ teamAboutData }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{teamAboutData.title}</h2>
          <h3 className="text-xl text-gray-600 mb-6">{teamAboutData.subtitle}</h3>
          <p className="text-gray-700 whitespace-pre-line">{teamAboutData.text}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamIntro; 