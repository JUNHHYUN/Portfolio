import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '../../data/teamData';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../../utils/constant/constant';

interface TeamMainImagesProps {
  delay: number;
}

const TeamMainImages: React.FC<TeamMainImagesProps> = ({ delay }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {teamData.map((member, index) => (
        <motion.img
          key={member.name}
          src={member.image}
          alt={member.name}
          className="absolute w-48 h-48 rounded-full object-cover shadow-lg"
          initial={OPACITY_0}
          animate={OPACITY_1}
          transition={{ ...ANI_TRANSITION, delay: delay + index * 0.3 }}
          style={{
            transform: `translate(${index === 0 ? '-180px' : index === 1 ? '0px' : '180px'}, ${index === 0 ? '-120px' : index === 1 ? '120px' : '-120px'})`,
            opacity: 0.6,
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export default TeamMainImages; 