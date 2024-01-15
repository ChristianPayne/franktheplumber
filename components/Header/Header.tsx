import React from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { useRouter } from 'next/router';

type Props = {
  onNav: () => any
}

const Header = ({ onNav }: Props) => {
  const router = useRouter()

  return (
    <div className='fixed top-0 z-50 w-full h-24 lg:h-36 bg-main-1 shadow-md flex items-center justify-around px-4'>
      {/* Large centered logo */}
      <div className='hidden h-32  lg:flex justify-center' onClick={() => router.push('/')}>
        <Logo size='large' />
      </div>

      {/* Medium logo */}
      <div className='lg:hidden w-56' onClick={() => router.push('/')}>
        <Logo size='medium' />
      </div>

      {/* Desktop Nav */}
      <div className='hidden lg:flex space-x-16 font-medium text-lg'>
        <Link href={'/'}>Home</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>

      {/* Mobile menu button the right */}
      <div className='lg:hidden cursor-pointer' onClick={onNav}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
