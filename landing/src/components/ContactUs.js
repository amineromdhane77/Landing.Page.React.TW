import React from 'react';
import { CONTACT_INFO } from '../indexx';
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
const ContactUs = () => {
  return (
    <section className='max-w-7xl mx-auto  ' id='contact'>
      <div className='mt-20'>
      <h2 className='text-xl lg:text-3xl tracking-tight text-center  mb-12 mx-4'>
      ContactUs
      </h2>
      <p className='max-x-2xl text-lg text-center  mb-12 mx-auto'>
      {CONTACT_INFO.text}
      </p>
      <div className='flex flex-col lg:flex-row justify-around mx-4'>
      <div className=' flex mb-8 lg:mb-0'>
      <MdOutlineLocalPhone  className='text-3xl mr-4'/>
  
      <div>
      <p className=' text-lg font-semibold'> {CONTACT_INFO.phone.label} </p>
      <p className=' text-neutral-600'> {CONTACT_INFO.phone.value} </p>
      </div>
      </div>
      <div className=' flex mb-8 lg:mb-0'>
      <MdOutlineEmail   className='text-3xl mr-4'/>
  
      <div>
      <p className=' text-lg font-semibold'> {CONTACT_INFO.email.label} </p>
      <p className=' text-neutral-600'> {CONTACT_INFO.email.value} </p>
      </div>
      </div>
      <div className=' flex mb-8 lg:mb-0'>
      <FiMapPin  className='text-3xl mr-4'/>
  
      <div>
      <p className=' text-lg font-semibold'> {CONTACT_INFO.address.label} </p>
      <p className=' text-neutral-600'> {CONTACT_INFO.address.value} </p>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
}

export default ContactUs;
