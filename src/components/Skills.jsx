import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
];

function Pill({ skill }) {
  return (
    <span className="bg-white border border-gray-200 text-[#1E1B4B] text-xs font-semibold px-3 py-1 rounded-md whitespace-nowrap">
      {skill}
    </span>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-[#EEF2FF] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="animate-on-scroll text-3xl font-extrabold text-[#1E1B4B] text-center mb-12">
          Technical Skills
        </h2>

        {/* 2×2 grid */}
        <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="bg-white/60 rounded-2xl p-6 border border-white/80">
              <h3 className="font-extrabold text-[#1E1B4B] text-sm mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Pill key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
