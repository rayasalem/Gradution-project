import React from 'react'
import About from './about/About';
import FeedBack from './feedBack/FeedBack';
import OurCourses from './ourCourses/OurCourses';

type Props = {}

const FeaturesSection = (props: Props) => {
  return (
    <div>

      <About/>
      <OurCourses/>
      <FeedBack/>
      
    </div>
  )
}

export default FeaturesSection;