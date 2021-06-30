import React from 'react';
import style from './header.module.css'
import Link from 'next/link'

type Props = {
  absolute?: boolean,
  white?: boolean,
  logo?: boolean
}

const Header = (props: Props) => {
  function handleProps () {
    return `${props.absolute ? style.absolute : ""} ${props.white ? style.white : ''} ${style.font}`
  }
  
  return (
      <header className={handleProps()}>
        <div className={style.flex}>
          {/* Logo */}
          <div>
            {/* TODO: Add logo */}
            <Link href="/">
              <a className={props.logo ? style.logo : ""}>
                Frank The Plumber
              </a>
            </Link>
          </div>

          {/* Nav Links */}
          <div className={style.list}>
            <ul>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
  );
}

export default Header;
