import React, { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const scrollRef = useRef(null);

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

  // Replace these with your actual video filenames
  const videos = [
    'video_1.mp4',
    'video_2.mp4',
    'video_3.mp4',
    'video_4.mp4',
    'video_5.mp4',
    'video_6.mp4',
    'video_1.mp4',
    'video_2.mp4',
    'video_3.mp4',
    'video_4.mp4',
    'video_5.mp4',
    'video_6.mp4',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-blue-50 to-white overflow-hidde pt-10">
      {/* Header */}
      {/* <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🎨</span>
          </div>
          <span className="text-xl font-bold">BrandLyft</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-600">Brands</a>
          <a href="#" className="hover:text-gray-600">Creators</a>
          <a href="#" className="hover:text-gray-600">Pricing</a>
          <a href="#" className="hover:text-gray-600">Use Cases</a>
          <a href="#" className="hover:text-gray-600">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-gray-600">Log in</button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition">
            Sign up
          </button>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="pt-12 pb-12 relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-orange-200 text-gray-800 px-6 py-2 rounded-full text-sm font-medium">
            Join over 100,000 happy creators
          </span>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Engage Audiences
            <br />
            with Stunning Videos
          </h1>

          {/* "Elevate your brand" annotation - top right */}
          <div className="absolute top-4 right-4 md:right-20 lg:right-32 hidden md:block">
            <div className="transform rotate-6">
              <div className="text-lg font-bold text-gray-800 relative inline-block">
                Elevate
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400"></div>
              </div>
              <div className="text-base text-gray-700 -mt-1 font-handwriting">your brand</div>
              <svg width="120" height="60" viewBox="0 0 120 60" className="absolute -bottom-12 -right-4">
                <path d="M10 10 Q60 40 110 25" 
                      stroke="#374151" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round"/>
                <path d="M110 25 L100 22 M110 25 L107 33" 
                      stroke="#374151" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
            Boost Your Brand with High-Impact Short Videos from
            <br />
            our expert content creators. Our team is ready to
            <br />
            propel your business forward
          </p>
        </div>

        {/* Video Cards Carousel with Simple Infinite Scroll */}
        <div className="relative mt-20 mb-16 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ 
              scrollBehavior: 'auto',
            }}
          >
            {/* Duplicate videos for seamless loop */}
            {[...videos, ...videos].map((video, index) => (
              <div
                key={`${video}-${index}`}
                className="flex-shrink-0 w-52 h-96 rounded-3xl shadow-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
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
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
                  <div className="w-16 h-16 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-gray-800 border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative mt-32 z-10">
          {/* "It's free" annotation - bottom left */}
          <div className="absolute left-1/2 -translate-x-48 md:-translate-x-56 -top-16 hidden md:block">
            <svg width="140" height="90" viewBox="0 0 140 90" className="text-gray-800">
              <path d="M120 15 Q80 50 30 60" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    fill="none" 
                    strokeLinecap="round"/>
              <path d="M30 60 L38 56 M30 60 L32 68" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    fill="none" 
                    strokeLinecap="round"/>
            </svg>
            <span className="absolute top-8 left-16 text-lg font-bold text-gray-700 transform -rotate-12 font-handwriting">
              It's free
            </span>
          </div>

          <button className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
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
}