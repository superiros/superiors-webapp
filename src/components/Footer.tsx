// For Next.js 13+ use this import:
// import Link from 'next/link';

// For older versions of Next.js or if you get import errors, use regular anchor tags:
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-black  relative">
                {/* <div className="absolute inset-1 bg-white transform -rotate-45"></div> */}
                <img src="/images/logo.png" alt="" />
              </div>
              <div className="text-lg font-semibold text-gray-900">
                Superiors Inadia
              </div>
            </div>
            <div className="text-gray-600">
              <p className="font-medium mb-2">Contact:</p>
              <a 
                href="mailto:superiorsdotin@gmail.com" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                superiorsdotin@gmail.com
              </a>
            </div>
          </div>

          {/* Process Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Process</h3>
            <ul className="space-y-2">
              <li>
                <a href="/process" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Popular FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                target='__blank'
                href="https://www.instagram.com/superiors.in/" 
                className="p-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a 
                target='__blank'
                href="https://x.com/Superiors_India" 
                className="p-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
              <a 
                target='__blank'
                href="https://www.linkedin.com/company/superiors-in" 
                className="p-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
              <a 
                target='__blank'
                href="https://www.youtube.com/@Superiors-Ind" 
                className="p-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © 2025 Superiors India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;