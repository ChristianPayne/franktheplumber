import React from 'react';
import style from './header.module.css';
import Link from 'next/link';
import Image from "next/image";

import Logo from "../../assets/FrankThePlumberLogo_150ppi.png";

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
          <div className={style.logo}>
            <Link href="/">
              <Image src={Logo} alt="Frank The Plumber Logo" />
            </Link>
          </div>

          {/* Nav Links */}
          <div className={style.list}>
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
          </div>
        </div>
      </header>
  );
}

export default Header;
