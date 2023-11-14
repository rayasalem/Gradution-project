import React, { useState } from 'react';
import HeroSection from './heroSection/HeroSection'
import FeaturesSection from './featuresSection/FeaturesSection';
import Footer from './footer/Footer';
import SignupSection from './signUp';


const HomePage:React.FC= () => {
 
  return (
    <div>
     <HeroSection/> 
     <FeaturesSection/>
     <SignupSection />
     <Footer/>
    </div>
  )
}
export default HomePage;