import React from 'react';
import Link from 'next/link';
import { Logo } from "../Logo";
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router';

type Props = {
  isOpen: boolean,
  onClose?: Function
}

const MobileNav = ({ isOpen = false, onClose = () => { } }: Props) => {
  let router = useRouter();

  let currentRoute = router.pathname;

  function close(route?: string) {
    if (route) router.push(route);
    onClose()
  }

  return (
    <>
      <Transition
        show={isOpen}
        appear={true}
        unmount={false}
        enter="transition-all duration-600"
        enterFrom="opacity-0 -translate-y-full"
        enterTo="opacity-100"
        leave="transition-all duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 -translate-y-full"
        className="h-full fixed inset-0 bg-accent-1 text-main-1 z-50">
        <nav className='h-full'>
          <div className='flex flex-col h-full justify-around'>
            <div className="flex justify-center">
              <div className="w-1/2" onClick={() => close('/')}>
                <Logo size='large' />
              </div>
            </div>
            <div className='space-y-8 uppercase text-center text-xl tracking-widest'>
              <div className='p-4 flex justify-center' onClick={() => close('/')}>
                <h2 className={`${currentRoute === '/' ? 'border-b-4 border-accent-2' : ''}`}>Home</h2>
              </div>
              <div className='p-4 flex justify-center' onClick={() => close('/services')}>
                <h2 className={`${currentRoute === '/services' ? 'border-b-4 border-accent-2' : ''}`}>Services</h2>
              </div>
              <div className='p-4 flex justify-center' onClick={() => close('/contact')}>
                <h2 className={`${currentRoute === '/contact' ? 'border-b-4 border-accent-2' : ''}`}>Contact</h2>
              </div>
            </div>
            <div className='h-64 flex items-center justify-center'>
              <button className='bg-accent-2 w-16 h-16 rounded-full text-main-1 flex items-center justify-center' onClick={() => close()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </Transition>
    </>
  );
}

export default MobileNav;
