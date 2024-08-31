import React from 'react';
import { PORTFOLIO_PROJECTS } from '../indexx';
const Portfolio = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2' id='portfolio' >
      <div className='mb-20'>
      <h2 className=' text-xl lg:text-3xl tracking-tight text-center uppercase mb-20 mt-12'>
     Portfolio
      </h2>
      <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      { PORTFOLIO_PROJECTS.map((projet)=>(
<div key={projet} className=' group relative overflow-hidden rounded-3xl mx-4'> 
<img src={projet.image} alt={projet.name} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ' />
<div className=' absolute inset-0 flex flex-col justify-center items-center opacity-0 backdrop-blur-lg
group-hover:opacity-100'>
<h3 className='mb-2 text-xl font-medium'>
{projet.name}
</h3>
<p className='mb-12 p-4 text-center'>
{projet.description}
</p>
</div>
</div>
      ))}
      </div>
      </div>
    </section>
  );
}

export default Portfolio;
