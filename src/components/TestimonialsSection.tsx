import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Completely changed the way I work. I felt a speed that I had never experienced before in projects.",
    name: "Rakesh Attardey",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    text: "The platform's intuitive design and powerful features have transformed our workflow. It's a game-changer for our team.",
    name: "Parth Verma",
    role: "Creative Director",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    text: "Outstanding experience from start to finish. The results exceeded our expectations and the ROI has been incredible.",
    name: "Saksham Wagh",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 4,
    text: "Best decision we made this year. The support team is responsive and the platform is incredibly reliable.",
    name: "Emily Rodriguez",
    role: "Brand Strategist",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return testimonials.length - 1;
      if (newIndex >= testimonials.length) return 0;
      return newIndex;
    });
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Know What <br className="hidden sm:block" /> Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0"
          >
            We are happy because we have happy customers — customer satisfaction
            is a matter of pride for us. Thank you to all our amazing clients.
          </motion.p>
        </div>

        {/* RIGHT CARD */}
        <div className="relative w-full">
          <div className="bg-gradient-to-r from-red-400 to-orange-400 text-white rounded-3xl p-8 sm:p-12 shadow-xl min-h-[320px] flex flex-col justify-between">
            <div className="overflow-hidden relative flex-1">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.p
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.3 },
                  }}
                  className="text-white text-base sm:text-lg lg:text-xl leading-relaxed absolute"
                >
                  {testimonials[currentIndex].text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* PROFILE & BUTTONS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-md"
                />
                <div className="text-white">
                  <h4 className="font-semibold text-lg sm:text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-100 text-sm sm:text-base">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              <div className="flex justify-center sm:justify-end gap-2">
                <motion.button
                  onClick={() => paginate(-1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </motion.button>
                <motion.button
                  onClick={() => paginate(1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
