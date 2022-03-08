import React from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';

type Props = {
}

const Footer = () => {
  
  return (
      <footer>
        <p className='font-montserrat p-8'>
          License Number
          <p className='text-4xl'>C36-967360</p>
        </p>
        <div className='bg-accent-1 text-main-1 p-6'>
          <div className="flex justify-between my-4">
            <Logo size='large' className='w-1/2'/>
            <div className='flex flex-col justify-around w-1/2'>
              <div className="p-2 active:bg-accent-2">
                <Link href='/' >About</Link>
              </div>
              <div className="p-2 active:bg-accent-2">
                <Link href='/' >Services</Link>
              </div>
              <div className="p-2 active:bg-accent-2">
                <Link href='/' >Contact</Link>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <p className='p-2 active:bg-accent-2'>000-000-0000</p>
            <a href="" className='p-2 active:bg-accent-2'>Facebook</a>
            <a href="" className='p-2 active:bg-accent-2'>Yelp</a>
          </div>

        </div>
      </footer>
  );
}

export default Footer;
