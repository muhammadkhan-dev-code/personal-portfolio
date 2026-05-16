import { useEffect, useRef } from 'react';

const certs = [
  { title: 'Frontend Dev & React JS', issuer: 'Simplilearn' },
  { title: 'Data Analytics', issuer: 'DigiSkills' },
  { title: 'Git & GitHub', issuer: 'DataCamp' },
];

function CertCard({ title, issuer }) {
  return (
    <div className="animate-on-scroll bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
      <div className="w-9 h-9 bg-[#4338CA] rounded-lg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
        </svg>
      </div>
      <div>
        <h4 className="font-bold text-[#1E1B4B] text-base leading-snug">{title}</h4>
        <p className="text-gray-400 text-sm mt-1">{issuer}</p>
      </div>
    </div>
  );
}

export default function Certifications() {
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
    <section ref={sectionRef} className="bg-[#EEF2FF] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="animate-on-scroll text-3xl font-extrabold text-[#1E1B4B] text-center mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <CertCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
