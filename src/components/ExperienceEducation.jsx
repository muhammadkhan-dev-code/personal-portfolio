import { useEffect, useRef } from 'react';

const experience = [
  { title: 'React Developer', sub: 'Devtown • Apr 2025', filled: true },
  { title: 'Frontend Intern', sub: 'CodeAlpha • Feb–Mar 2025', filled: false },
];

const education = [
  { title: 'Software Engineering', sub: 'MUET • 2022–Present', filled: true },
  { title: 'FSc Pre-Engineering', sub: 'NJV College • 2020–2022', filled: false },
];

function TimelineItem({ title, sub, filled }) {
  return (
    <div className="flex items-start gap-4 py-4">
      <div className="mt-1 flex-shrink-0">
        {filled ? (
          <div className="w-4 h-4 rounded-full bg-[#4338CA]" />
        ) : (
          <div className="w-4 h-4 rounded-full border-2 border-[#4338CA]" />
        )}
      </div>
      <div>
        <h4 className="font-bold text-[#1E1B4B] text-base">{title}</h4>
        <p className="text-[#4338CA] text-xs font-semibold mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function Column({ heading, items }) {
  return (
    <div className="animate-on-scroll flex-1">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-0.5 w-8 bg-[#4338CA]" />
        <h3 className="text-xl font-extrabold text-[#1E1B4B]">{heading}</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function ExperienceEducation() {
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
    <section id="experience" ref={sectionRef} className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <Column heading="Experience" items={experience} />
          <div className="hidden md:block w-px bg-gray-100" />
          <Column heading="Education" items={education} />
        </div>
      </div>
    </section>
  );
}
