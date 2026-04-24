import React from 'react';

const SkillCard = ({ title, icon, color, skills }) => {
  return (
    <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-500 group hover:-translate-y-3 shadow-lg hover:shadow-indigo-500/10 flex flex-col h-full">
      
      {/* Icon Container with subtle animation */}
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-inner`}>
        {icon}
      </div>
      
      {/* Title with color transition */}
      <h3 className="text-xl font-bold text-white mb-5 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Skill List with bullet point animations */}
      <ul className="space-y-3 mt-auto">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-400 flex items-center gap-3 text-sm font-medium group/item hover:text-gray-200 transition-colors">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all duration-300"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;