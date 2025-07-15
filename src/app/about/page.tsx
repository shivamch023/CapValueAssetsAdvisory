import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'

const page = () => {
  return (
    <div className='py-20 px-4 md:px-20 text-white container bg-[#010913] mt-5'>
        <PageBanner
               title="About"
               description="Explore our premium salon services tailored just for you."
               bgImage="/assets/banner/about.jpg
               "
               
             />

      
    </div>
  )
}

export default page
