import React from 'react'
import HeroSection from './components/Hero/Hero'
import SalonExperienceSection from './components/SalonExperienceSection/SalonExperienceSection'
import ServiceSection from './components/ServiceSection/ServiceSection'
import ClientReviews from './components/ClientReviews/ClientReviews'

const page = () => {
  return (
    <div className='container'>
      
      <HeroSection/>
      <SalonExperienceSection/>
      <ServiceSection/>
      <ClientReviews/>
      
      
    </div>
  )
}

export default page
