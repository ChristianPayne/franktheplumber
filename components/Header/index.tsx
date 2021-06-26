import React from 'react';
import style from './header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
      <header>
        <div className={style.flex}>
          <div>
            {/* TODO: Add logo */}
            <Link href="/">
              <a>Frank The<br/>Plumber</a>
            </Link>
          </div>

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
