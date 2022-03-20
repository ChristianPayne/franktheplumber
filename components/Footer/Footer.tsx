import React, { useEffect, useState, forwardRef, RefObject, useRef } from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { useRouter } from 'next/router';

type Props = {
  fixed: boolean
}

const Footer = ({fixed}: Props) => {
  const router = useRouter()
  
  return (
      <footer className={`${fixed ? 'fixed bottom-0' : '' }`}>
        <p className='p-8 bg-main-1'>
          License Number
          <br/>
          <span className='text-4xl'>C36-967360</span>
        </p>
        <div className='bg-accent-1 text-main-1 p-6 text-center'>
          <div className="w-2/5 m-auto">
            <div className="" onClick={() => router.push('/')}>
              <Logo size='large' className='w-1/2'/>
            </div>
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
