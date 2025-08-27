import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "We provide web development, app development, business branding, marketing campaigns, and consulting services tailored to help your business grow.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can reach us through the Contact page, via email at info@superiors.in, or by calling our support number.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes! We specialize in creating fully customized solutions based on your unique business requirements.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with a wide range of industries, including retail, healthcare, education, real estate, and more.",
  },
];

export default function PopularFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Popular FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
