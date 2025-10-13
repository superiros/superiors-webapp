import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Term {
  title: string;
  content: string;
}

const terms: Term[] = [
  {
    title: "Acceptance of Terms",
    content: "By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part, please discontinue use immediately.",
  },
  {
    title: "Use of Our Services",
    content: "You agree to use our website and services only for lawful purposes. You must not engage in any activity that disrupts, damages, or interferes with our platform or users.",
  },
  {
    title: "Intellectual Property Rights",
    content: "All content, trademarks, logos, and designs on this website are the exclusive property of our company. Unauthorized use or reproduction of our materials is strictly prohibited.",
  },
  {
    title: "Limitation of Liability",
    content: "We shall not be held liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Use at your own discretion and risk.",
  },
  {
    title: "Privacy Policy",
    content: "Your privacy matters to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.",
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Review the Terms periodically for updates.",
  },
  {
    title: "Contact Us",
    content: "For questions or concerns, reach us at contact@superiors.in.",
  },
];

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-24">
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-8 py-12 md:py-16">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-center text-gray-500 mb-12">
            Last updated: October 12, 2025
          </p>

          <div className="space-y-4">
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-100 transition"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{term.title}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    className="text-xl font-bold transition-transform"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 text-base"
                    >
                      {term.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
