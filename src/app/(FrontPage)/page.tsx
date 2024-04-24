import React from 'react';
import HeroCarousel from './HeroCarousel';
import Newsletter from './Newsletter';
import MultiColumn from './MultiColumn';
import LatestTours from './LatestTours';
import ExploreContinents from './ExploreContinents';
import TravelBlog from './TravelBlog';
import OurPartners from './OurPartners';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import MapDestinations from './MapDestinations';

const Home = () => {
  return (
    <div>
        {/* HERO CAROUSEL */}
        <HeroCarousel />

        {/* Multi Column */}
        <MultiColumn />

        {/* CallToAction */}
        <CallToAction />

        {/* Latest Tours */}
        <LatestTours />

        {/* Testimonials */}
        <Testimonials />

        {/* Explore Continents */}
        <ExploreContinents />

        {/* Map Destinations */}
        <MapDestinations />

        {/* Travel Blog */}
        <TravelBlog />

        {/* Our Partners */}
        <OurPartners />

        {/* Newsletter */}
        <Newsletter />
    </div>
  )
}

export default Home;