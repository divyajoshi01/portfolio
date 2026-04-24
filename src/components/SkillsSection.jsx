import React from 'react';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const skillData = [
    {
      title: "Frontend Development",
      icon: "⚛️",
      color: "bg-blue-500/10 text-blue-500",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"]
    },
    {
      title: "Backend Development",
      icon: "🚀",
      color: "bg-green-500/10 text-green-500",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"]
    },
    {
      title: "Database Management",
      icon: "💾",
      color: "bg-yellow-500/10 text-yellow-500",
      skills: ["MongoDB", "Mongoose", "SQL Fundamentals", "Firebase"]
    },
    {
      title: "Core CS & Tools",
      icon: "🛠️",
      color: "bg-pink-500/10 text-pink-500",
      skills: ["Data Structures (DSA)", "CS Fundamentals", "Git & GitHub", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Subtle Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Technical <span className="text-indigo-500">Expertise</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            A blend of strong academic foundations from my <span className="text-white font-medium">BSc & MSc in Computer Science</span> and hands-on experience with modern <span className="text-white font-medium">MERN Stack</span> technologies.
          </p>
        </div>

        {/* Grid Layout for Skill Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillData.map((data, index) => (
            <SkillCard 
              key={index}
              title={data.title}
              icon={data.icon}
              color={data.color}
              skills={data.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;