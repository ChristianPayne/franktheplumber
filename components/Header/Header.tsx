import React from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { useRouter } from 'next/router';

type Props = {
  onNav: ()=>any
}

const Header = ({onNav}: Props) => {
  const router = useRouter()
  
  return (
    <div className='fixed top-0 z-50 w-full h-24 bg-main-1 shadow-md'>
      {/* <Logo size='medium' className='ml-4'/> */}
      <div className='absolute top-1/4 h-36 flex justify-center' onClick={() => router.push('/')}>
        <Logo size='large'/>
      </div>
      <div className='absolute right-0 top-1/2 -translate-y-1/2 p-4 cursor-pointer flex items-center' onClick={onNav}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
