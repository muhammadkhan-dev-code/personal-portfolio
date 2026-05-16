import { useEffect, useRef } from 'react';

// SVG Icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

export default function Hero() {
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
      id="home"
      ref={sectionRef}
      className="min-h-screen bg-white flex flex-col items-center justify-center pt-20 pb-16 px-6 text-center"
    >
      {/* Available badge */}
      <div className="animate-on-scroll mb-6">
        <span className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#4338CA] text-sm font-semibold px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#4338CA] animate-pulse" />
          Available for work
        </span>
      </div>

      {/* Name */}
      <h1 className="animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1E1B4B] leading-tight mb-3">
        Muhammad Khan
      </h1>

      {/* Subtitle */}
      <p className="animate-on-scroll text-lg md:text-xl font-semibold text-[#4338CA] mb-8">
        MERN Stack Developer / React Developer
      </p>

      {/* CTA Buttons */}
      <div className="animate-on-scroll flex flex-wrap items-center justify-center gap-4 mb-10">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#4338CA] text-white font-semibold px-7 py-3 rounded-lg hover:bg-[#3730a3] transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          View Projects
        </a>
        <a
          href="#"
          className="bg-white text-[#1E1B4B] font-semibold px-7 py-3 rounded-lg border-2 border-[#1E1B4B] hover:border-[#4338CA] hover:text-[#4338CA] transition-colors duration-200"
        >
          Download CV
        </a>
      </div>

      {/* Social Icons */}
      <div className="animate-on-scroll flex items-center justify-center gap-5">
        <a
          href="https://github.com/muhammadkhan-dev-code"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#4338CA] hover:bg-[#EEF2FF] transition-all duration-200"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-khan-9b907b260/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#4338CA] hover:bg-[#EEF2FF] transition-all duration-200"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href="mailto:muhammadkhansw00@gmail.com"
          className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#4338CA] hover:bg-[#EEF2FF] transition-all duration-200"
          aria-label="Email"
        >
          <EmailIcon />
        </a>
      </div>
    </section>
  );
}
