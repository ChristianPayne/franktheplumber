import React from 'react'; 
import Link from 'next/link';
import Logo from "../Logo";
import { Transition } from '@headlessui/react'

type Props = {
  isOpen: boolean,
  onClose?: Function
}

const MobileNav = ({isOpen = false, onClose = ()=>{}}: Props) => {

  function close () {
    onClose()
  }

  return (
    <>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="h-full fixed inset-0 bg-white">
        <nav className='h-full'>
          <Logo />
          <div className='flex flex-col h-full justify-around'>
            <div className='space-y-16 font-sans uppercase text-center text-xl'>
              <div className='block' onClick={close}>
                <Link href='/'>Home</Link>
              </div>
              <div className='block' onClick={close}>
                <Link href='/interiors'>Interiors</Link>
              </div>
              <div className='block' onClick={close}>
                <Link href='/exteriors'>Exteriors</Link>
              </div>
              <div className='block' onClick={close}>
                <Link href='/contact'>Contact</Link>
              </div>
            </div>
            <div className='h-64 flex items-center justify-center'>
              <button className='bg-gray-700 w-16 h-16 rounded-full text-3xl text-white' onClick={close}>X</button>
            </div>
          </div>
        </nav>
      </Transition>
    </>
  );
}

export default MobileNav;
