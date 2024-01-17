import React, { useEffect, useState, forwardRef, RefObject, useRef } from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { useRouter } from 'next/router';

type Props = {
  fixed: boolean
}

const Footer = ({ fixed }: Props) => {
  const router = useRouter()

  return (
    <footer className={`w-full ${fixed ? 'fixed bottom-0' : ''}`}>
      <div className='flex justify-center p-8 bg-main-1'>
        <div>
          <p className='text-center'>License Number</p>
          <span className='text-4xl'>C36-967360</span>
        </div>
      </div>
      <div className='bg-accent-1 text-main-1 p-6 text-center items-center flex justify-around'>
        <div className="w-1/2" onClick={() => router.push('/')}>
          <Logo size='large' className="h-24 w-full lg:h-36" />
        </div>
        <div className='lg:flex lg:space-x-8'>
          <div className="p-2 active:bg-accent-2 rounded-md ">
            <Link href='/contact' >Contact</Link>
          </div>
          <div className="p-2 active:bg-accent-2 rounded-md ">
            <Link href='/contact/email' >Email</Link>
          </div>
          <div className='p-2 active:bg-accent-2 rounded-md'>
            <a href='tel:+17144825144'>(714) 482-5144</a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
