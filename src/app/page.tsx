import React from 'react'
import HeroSection from './components/Hero/Hero'
import SalonExperienceSection from './components/SalonExperienceSection/SalonExperienceSection'
import ServiceSection from './components/ServiceSection/ServiceSection'

const page = () => {
  return (
    <div className='container'>
      
      <HeroSection/>
      <SalonExperienceSection/>
      <ServiceSection/>
      
      
    </div>
  )
}

export default page
