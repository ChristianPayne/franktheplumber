import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { useRouter } from 'next/router';

type Props = {
  mainPageRef
}

const Footer = ({mainPageRef}: Props) => {
  const router = useRouter()
  const [fixFooter, setFixFooter] = useState(false);

  useEffect(() => {
    if(mainPageRef.current === undefined) {
      console.log("I'm broken");
    } else {
      console.log("Main Ref", mainPageRef);    
      console.log(mainPageRef.current.clientHeight, window.screen.height);
      
      if(mainPageRef.current.clientHeight < window.screen.height) {
        setFixFooter(true)
      } else {
        setFixFooter(false)
      }
    }

  }, [mainPageRef.current])
  
  return (
      <footer className={`${fixFooter ? 'fixed bottom-0' : '' }`}>
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
