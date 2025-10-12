import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Web deb',
    desc: 'We help you build a brand that speaks for itself, clear, consistent, and memorable. From logo design to visual identity.',
    img: '/images/branding.jpg',
  },
  {
    title: 'Branding',
    desc: 'We build fast, responsive, and scalable websites tailored to your needs. From front-end to back-end, our focus is on clean code.',
    img: '/images/webdev.jpg',
  },
  {
    title: 'Video Creation',
    desc: 'Designing user interfaces and experiences that delight and engage users while achieving business goals.',
    img: '/images/videocreation.jpg',
  },
  {
    title: 'Social Media',
    desc: 'Boost your brand visibility with SEO, social media campaigns, and performance marketing strategies.',
    img: '/images/social_media.jpg',
   },
  {
    title: 'AI Ads',
    desc: 'We create high-performance mobile apps for Android and iOS that users love and businesses trust.',
    img: '/images/appdev.jpg',
  },
  {
    title: 'Graphic Design',
    desc: 'Our content strategies ensure your brand connects effectively through compelling storytelling and design.',
    img: '/images/graphic.jpg',
  },
];

const ServicesSection = () => {
  const containerRef = useRef(null);

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
    <section ref={containerRef} className="py-20 px-6 md:px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Design to Development — all that you will ever need in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card opacity-0 translate-y-8 transition-all duration-700 ease-out bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <Button className="rounded-full">Know more</Button>
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

export default ServicesSection;