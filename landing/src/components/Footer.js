import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto '>
      <div className='flex flex-col md:flex-row justify-between items-center border-t-2 py-4'>
      <div className='flex space-x-2 mb-2'>
      <a href='http://www.facebook.com'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='visit our Facebook Page'>
      <FaFacebookF />
      </a>
      <a href='http://www.twitter.com'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='visit our Twitter Page'>
      <FaSquareXTwitter />
      </a>
      <a href='http://www.instagrame.com'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='visit our instagrame Page'>
      <FaInstagramSquare />
      </a>
      </div>
      <p className='text-sm'>&copy:2024 VastuSpaze:All Right Reservet</p>
      </div>
    </footer>
  );
}

export default Footer;
