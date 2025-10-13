import { useEffect, useRef } from 'react';

const projects = [
  { title: 'Architecture Design', img: '/images/architecture.jpg' },
  { title: 'Capsules', img: '/images/capsules.jpeg' },
  { title: 'Brand Identity', img: '/images/brandingproject.jpg' },
  { title: 'Creative Ads', img: '/images/ads.jpg' },
  { title: 'Lip Whip Campaign', img: '/images/lipwhip.jpg' },
  { title: 'GUCCI', img: '/images/gucci.jpg' },
  { title: 'Forle Thilvs', img: '/images/forle.jpg' },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in');
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-16 px-4 sm:px-6 md:px-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Experience our latest work — from branding to digital campaigns.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
        <div
          key={index}
          className={`project-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transform
            ${(project.title === 'Capsules' || project.title === 'GUCCI') ? 'sm:col-span-2' : ''}`}
        >

            <div className="overflow-hidden rounded-2xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
