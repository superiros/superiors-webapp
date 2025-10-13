import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Web Dev',
    desc: 'We craft fast, responsive, and secure websites that elevate your digital presence and drive real results.',
    img: '/images/branding.jpg',
  },
  {
    title: 'Branding',
    desc: 'Build a brand that speaks for itself — clear, consistent, and unforgettable across every platform.',
    img: '/images/webdev.jpg',
  },
  {
    title: 'Video Creation',
    desc: 'Transform ideas into stunning visuals that captivate audiences and tell your brand’s story powerfully.',
    img: '/images/videocreation.jpg',
  },
  {
    title: 'Social Media',
    desc: 'Grow your audience with creative content, smart strategies, and data-driven social media campaigns.',
    img: '/images/social_media.jpg',
  },
  {
    title: 'AI Ads',
    desc: 'Leverage AI-powered advertising to reach the right audience, boost engagement, and maximize ROI.',
    img: '/images/appdev.jpg',
  },
  {
    title: 'Graphic Design',
    desc: 'Delivering designs that inspire from sleek visuals to complete brand identities that stand out.',
    img: '/images/graphic.jpg',
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-16 px-4 sm:px-6 md:px-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Design to Development all that you will ever need in one place.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-gray-50 p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transform"
          >
            <div className="overflow-hidden rounded-xl mb-3 sm:mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
              {service.desc}
            </p>
            <Button className="rounded-full text-sm sm:text-base px-4 sm:px-6 py-2">
              Know More
            </Button>
          </div>
        ))}
      </div>

      {/* Fade-in Animation Style */}
      <style jsx>{`
        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
