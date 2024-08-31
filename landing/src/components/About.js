import React from 'react';
import aboutImage from '../assets/about.webp'
const About = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2 mt-20' id='about'>
    <h2 className='text-xl lg:text-3xl tracking-tight text-center  mb-12 mx-4'>
    About
    </h2>
      <div className='flex flex-col items-center lg:space-x-8 mx-4 mb-20'>
      <div className='mb-8 lg:mb-0'>
      <img src={aboutImage} alt='about' className='w-full h-auto'/>
      
      </div>
      <p className=' text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8'>
      In this video, let’s build a react project which will be a simple landing page for a home renovation services company called VastuSpaze. We will also be making use of Tailwind CSS to build this project. At the end of the video, we will also look at how to deploy website using the Vercel platform.
      In this video, let’s build a react project which will be a simple landing page for a home renovation services company called VastuSpaze. We will also be making use of Tailwind CSS to build this project. At the end of the video, we will also look at how to deploy website using the Vercel platform.
      </p>
      </div>
    </section>
  );
}

export default About;
