import React from 'react';
import Link from 'next/link';

type Props = {
  name: string,
  href?: string,
  className?: string,
  onClick?: Function
}

const Button = ({ name, href, className, onClick }: Props) => {

  function getHref() {
    if (href) return href
    else return '/'
  }

  function getOnClick(e) {
    if (onClick) return onClick(e)
    else return () => { }
  }

  return (
    <div className='px-4 w-full lg:min-w-[30%] lg:max-w-md'>
      <button className={'p-4 w-full rounded-md ' + className} onClick={e => getOnClick(e)}>
        <Link href={getHref()} passHref>
          <div className='flex justify-between'>
            {name}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </button>
    </div>
  );
}

export default Button;
