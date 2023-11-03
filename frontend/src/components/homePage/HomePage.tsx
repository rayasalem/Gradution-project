import React from 'react'
import HeroSection from './heroSection/HeroSection'
import FeaturesSection from './featuresSection/FeaturesSection';
import Footer from './footer/Footer';


const HomePage:React.FC= () => {
  return (
    <div>
     <HeroSection/> 
      <FeaturesSection/>
      <Footer/>
    </div>
  )
}
export default HomePage;