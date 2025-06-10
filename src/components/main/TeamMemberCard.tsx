import React from 'react';
import { TeamMember } from '../../data/teamData';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-lightGray text-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-center mb-2 text-white">{member.name}</h3>
      <p className="text-white text-center mb-4">{member.role}</p>
      <p className="text-white mb-4">{member.description}</p>
      <div className="space-y-2">
        {Object.entries(member.skills).map(([category, skills]) => (
          <div key={category}>
            <h4 className="font-semibold text-white">{category}</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {skills?.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCard; 