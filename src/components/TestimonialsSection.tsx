import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Completely changed the way I work. I felt a speed that I had never experienced before in projects.",
    name: "Brooklyn Simmons",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    text: "The platform's intuitive design and powerful features have transformed our workflow. It's a game-changer for our team.",
    name: "Sarah Johnson",
    role: "Creative Director",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    text: "Outstanding experience from start to finish. The results exceeded our expectations and the ROI has been incredible.",
    name: "Michael Chen",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 4,
    text: "Best decision we made this year. The support team is responsive and the platform is incredibly reliable.",
    name: "Emily Rodriguez",
    role: "Brand Strategist",
    avatar: "https://i.pravatar.cc/150?img=9"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return testimonials.length - 1;
      if (newIndex >= testimonials.length) return 0;
      return newIndex;
    });
  };

  // Auto-scroll effect
  useState(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  });

  const handleManualNavigation = (dir: number) => {
    setIsAutoPlaying(false);
    paginate(dir);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Know What<br />
              Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-md"
            >
              We are happy because we have happy customers, because customer satisfaction is a matter of pride for us, thank you all customers.
            </motion.p>
          </div>

          {/* Right Testimonial Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-300 to-blue-400 rounded-3xl p-12 shadow-xl">
              <div className="space-y-8">
                <div className="overflow-hidden">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.p
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="text-white text-xl lg:text-2xl leading-relaxed"
                    >
                      {testimonials[currentIndex].text}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between">
                  <div className="overflow-hidden flex-1">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                        className="flex items-center gap-4"
                      >
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                        />
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-blue-100 text-sm">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-2 ml-4">
                    <motion.button
                      onClick={() => paginate(-1)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </motion.button>
                    <motion.button
                      onClick={() => paginate(1)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

                        
          </div>
        </div>
      </div>
    </section>
  );
}