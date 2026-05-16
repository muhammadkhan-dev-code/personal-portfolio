import { useEffect, useRef } from 'react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    title: 'ApnaTube',
    badge: null,
    description: 'A fully functional YouTube clone using MERN stack and Cloudinary for media storage.',
    tech: ['React', 'Node.js', 'Cloudinary'],
    github: 'https://github.com/muhammadkhan-dev-code',
  },
  {
    title: 'Alumni Council',
    badge: 'In Progress',
    description: 'A community platform connecting students and alumni.',
    tech: ['React', 'MongoDB'],
    github: 'https://github.com/muhammadkhan-dev-code',
  },
  {
    title: 'Resume Builder',
    badge: null,
    description: 'A simple resume builder generating standard formats quickly.',
    tech: ['Express', 'MongoDB'],
    github: 'https://github.com/muhammadkhan-dev-code',
  },
  {
    title: "Airbnb Clone  Complete Rental System",
    badge: 'completed',
    description: 'Built a complete rental platform with property listings, search, and booking using HTML, CSS, JavaScript, MongoDB, and Cloudinary for image storage.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/muhammadkhan-dev-code/air_bnb-project',
  }
];

function TechPill({ label }) {
  return (
    <span className="border border-[#4338CA] text-[#4338CA] text-xs font-semibold px-2.5 py-0.5 rounded-full">
      {label}
    </span>
  );
}

function ProjectCard({ title, badge, description, tech, github }) {
  return (
    <div className="animate-on-scroll bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="font-extrabold text-[#1E1B4B] text-lg">{title}</h3>
        {badge && (
          <span className="bg-[#4338CA] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => <TechPill key={t} label={t} />)}
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-[#1E1B4B] hover:bg-[#4338CA] text-white font-semibold text-sm py-2.5 rounded-lg transition-colors duration-200"
      >
        <GithubIcon /> GitHub
      </a>
    </div>
  );
}

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="animate-on-scroll text-3xl font-extrabold text-[#1E1B4B] text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
