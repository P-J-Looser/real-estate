import React from 'react'
import HeroSection from '../components/HeroSection'
import UpcomingProjects from "../components/UpcomingProjects";
import PremierProjects from '../components/PremierProjects';
import ShortGallery from '../components/ShortGallery';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <UpcomingProjects />
      <PremierProjects />
      <ShortGallery />
    </div>
  );
}

export default Home