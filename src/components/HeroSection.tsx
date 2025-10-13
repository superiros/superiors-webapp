import React, { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.8;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  const videos = [
    'video_1.mp4',
    'video_2.mp4',
    'video_3.mp4',
    'video_4.mp4',
    'video_5.mp4',
    'video_6.mp4',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-blue-50 to-white overflow-hidden pt-10 px-4 md:px-0">

      {/* Main Content */}
      <main className="pt-12 pb-12 relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-orange-200 text-gray-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
            Join over 100,000 happy creators
          </span>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-8 relative z-10 px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Engage Audiences
            <br />
            with Stunning Videos
          </h1>

          {/* Annotation (hidden on small screens) */}
          <div className="absolute top-4 right-2 md:right-20 lg:right-32 hidden md:block">
            <div className="transform rotate-6">
              <div className="text-lg font-bold text-gray-800 relative inline-block">
                Elevate
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400"></div>
              </div>
              <div className="text-base text-gray-700 -mt-1 font-handwriting">
                your brand
              </div>
              <svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                className="absolute -bottom-12 -right-4"
              >
                <path
                  d="M10 10 Q60 40 110 25"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M110 25 L100 22 M110 25 L107 33"
                  stroke="#374151"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <p className="text-gray-600 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Boost Your Brand with High-Impact Short Videos from our expert content creators. <br className="hidden sm:block"/> 
            Our team is ready to propel your business forward.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative mt-12 sm:mt-20 mb-12 sm:mb-16 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-hidden"
            style={{
              scrollBehavior: 'auto',
            }}
          >
            {[...videos, ...videos].map((video, index) => (
              <div
                key={`${video}-${index}`}
                className="flex-shrink-0 w-40 sm:w-52 h-64 sm:h-96 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 relative"
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={`/videos/${video}`} type="video/mp4" />
                </video>

                {/* Overlay Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-[8px] sm:border-t-[10px] border-t-transparent border-l-[14px] sm:border-l-[16px] border-l-gray-800 border-b-[8px] sm:border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative mt-20 sm:mt-32 z-10">
          {/* “It’s free” Annotation (hidden on small) */}
          <div className="absolute left-1/2 -translate-x-40 md:-translate-x-56 -top-10 hidden md:block">
            <svg width="140" height="90" viewBox="0 0 140 90" className="text-gray-800">
              <path
                d="M120 15 Q80 50 30 60"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M30 60 L38 56 M30 60 L32 68"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute top-8 left-16 text-lg font-bold text-gray-700 transform -rotate-12 font-handwriting">
              It's free
            </span>
          </div>

          <button className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      </main>

      <style jsx>{`
        video {
          pointer-events: none;
        }
        .font-handwriting {
          font-family: 'Brush Script MT', cursive;
        }
      `}</style>
    </div>
  );
};
