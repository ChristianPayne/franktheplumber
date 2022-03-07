import React from 'react';
import Link from 'next/link';
import Logo from '../Logo';

type Props = {
  onNav: ()=>any
}

const Header = ({onNav}: Props) => {
  
  return (
      <div className='flex justify-between'>
        <Link href="/">
          <Logo/>
        </Link>

        <div className='p-4 cursor-pointer flex items-center' onClick={onNav}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </div>
      </div>
  );
}

export default Header;
