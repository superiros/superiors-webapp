import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import type { Metadata } from 'next';

const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "Superiors | Digital Marketing, Content Creation & Product Development",
  description:
    "Superiors is a leading digital agency in India offering digital marketing, creative content creation, and innovative product development to elevate your brand.",
  keywords: [
    "Superiors",
    "Digital Marketing Agency",
    "Content Creation Services",
    "Product Development",
    "Social Media Marketing",
    "SEO Services",
    "Branding Agency India",
    "Creative Digital Agency",
    "Web Development Company",
    "Digital Strategy",
    "Online Advertising"
  ],
  authors: [{ name: "Superiors", url: "https://superiors.in" }],
  openGraph: {
    title: "Superiors | Grow Your Brand Online",
    description:
      "At Superiors, we provide end-to-end digital solutions—from marketing to content to product innovation. Let your brand shine online.",
    url: "https://superiors.in",
    siteName: "Superiors",
    images: [
      {
        url: "/images/og-image.jpg", // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "Superiors - Digital Solutions Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superiors | Full-Service Digital Agency",
    description:
      "Superiors helps businesses grow with expert digital marketing, creative content, and innovative development services.",
    creator: "@superiors_in", // Update if you have a Twitter/X account
    images: ["https://superiors.in/twitter-image.jpg"], // Replace if available
  },
  metadataBase: new URL("https://superiors.in"),
  alternates: {
    canonical: "https://superiors.in",
  },
};



const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
