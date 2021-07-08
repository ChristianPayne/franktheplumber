import React from 'react'; 
import Link from 'next/link';
import style from './mobilenav.module.css';

type Props = {

}

const MobileNav = (props: Props) => {
  return (
    <nav className={style.mobileNav}>
      <button className={style.closeButton}>
        <p>✖</p>
      </button>
      <ul>
        <li>
          <Link href="#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
