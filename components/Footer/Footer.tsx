import React from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { useRouter } from 'next/router';

type Props = {
}

const Footer = () => {
  const router = useRouter()
  
  return (
      <footer>
        <p className='p-8'>
          License Number
          <br/>
          <span className='text-4xl'>C36-967360</span>
        </p>
        <div className='bg-accent-1 text-main-1 p-6'>
          <div className="flex justify-between my-4">
            <div className="w-2/5" onClick={() => router.push('/')}>
              <Logo size='large' className='w-1/2'/>
            </div>
            <div className='flex flex-col justify-around w-1/2'>
              <div className="p-2 active:bg-accent-2 rounded-md">
                <Link href='/' >About</Link>
              </div>
              <div className="p-2 active:bg-accent-2 rounded-md">
                <Link href='/' >Services</Link>
              </div>
              <div className="p-2 active:bg-accent-2 rounded-md">
                <Link href='/' >Contact</Link>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <a className='p-2 active:bg-accent-2 rounded-md' href='tel:+17144825144'>(714) 482-5144</a>
            <a href="https://www.facebook.com/Frank-the-Plumber-184190448331140" rel="noreferrer" target='_blank' className='p-2 active:bg-accent-2 rounded-md'>Facebook</a>
            <a href="https://www.yelp.com/biz/frank-the-plumber-la-habra" rel="noreferrer" target='_blank' className='p-2 active:bg-accent-2 rounded-md'>Yelp</a>
          </div>

        </div>
      </footer>
  );
}

export default Footer;
