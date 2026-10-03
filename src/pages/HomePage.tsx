import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/hero/Hero';
import { CaseStudiesSection } from '../components/casestudies/CaseStudiesSection';
import { ProjectsOverview } from '../components/projects/ProjectsOverview';
import { AboutSection } from '../components/about/AboutSection';
import { ContactSection } from '../components/contact/ContactSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling if navigating from another page
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="w-full min-h-screen">
      <Hero />
      <CaseStudiesSection />
      <ProjectsOverview />
      <AboutSection />
      <ContactSection />
    </main>
  );
};
