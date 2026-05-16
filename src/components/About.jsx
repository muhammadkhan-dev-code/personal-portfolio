import { useEffect, useRef } from 'react'

const stats = [
  { value: '3+', label: 'Projects' },
  { value: '1', label: 'Internships' },
  { value: 'MUET', label: 'Student' }
]

function Avatar () {
  return (
    <div className='relative inline-block '>
      <div className='w-40  bg-black h-40 md:w-48 md:h-48 rounded-full ring-4 ring-[#4338CA] ring-offset-4 overflow-hidden bg-[#EEF2FF] flex items-center justify-center'>
        <img
          src='/profile.png'
          alt='Profile'
          className='w-[190px] h-[190px] object-cover object-center rounded-full'
        />
      </div>
    </div>
  )
}

export default function About () {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach(el => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id='about' ref={sectionRef} className='bg-[#EEF2FF] py-20 px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16'>
          {/* Avatar */}
          <div className='animate-on-scroll flex-shrink-0'>
            <Avatar />
          </div>

          {/* Text content */}
          <div className='flex-1 animate-on-scroll'>
            <h2 className='text-3xl font-extrabold text-[#1E1B4B] mb-4'>
              About Me
            </h2>
            <p className='text-[#1E1B4B] text-base leading-relaxed mb-8 opacity-80'>
              Aspiring Full Stack Developer with hands on experience in building
              responsive, user-friendly web applications using the MERN stack.
              Skilled in frontend development with HTML, CSS, Tailwind CSS, and
              JavaScript, and backend development with Node.js and Express.js,
              with database management using MySQL and MongoDB. Currently
              pursuing a bachelor's in software engineering at MUET, with
              practical project experience ranging from portal clones to
              real-time applications. Passionate about writing clean, scalable
              code and delivering impactful digital solutions
            </p>

            {/* Stat cards */}
            <div className='grid grid-cols-3 gap-3'>
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className='bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm'
                >
                  <span className='block text-2xl font-extrabold text-[#4338CA]'>
                    {value}
                  </span>
                  <span className='text-xs text-gray-500 font-medium mt-1 block'>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
