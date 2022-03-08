import React from "react";
import Image from "next/image";
import Frank_Logo from "/assets/logo/Frank_Logo.svg";
import FrankThePlumber_Logo from "/assets/logo/FrankThePlumber.svg";
import FrankThePlumber_Logo_Full from "/assets/logo/FrankThePlumber_Logo_Full.svg";

type Props = {
  size: 'small' | 'medium' | 'large',
  className?: string
}

export default function Logo ({size = 'small', className=""}: Props) {

  function getLogo (logoSize) {
    switch (logoSize) {
      case 'small':
        return <Image src={Frank_Logo} height={100} width={160} alt="Logo" />;
      case 'medium':
        return <Image src={FrankThePlumber_Logo} height={100} width={160} alt="Logo" />;
      case 'large':
        return <Image src={FrankThePlumber_Logo_Full} height={140} width={300} alt="Logo" />;
      default:
        throw new Error (`Logo size incorrect. Passed in '${logoSize}'`);
    }
  }

  return (
    <div className={className}>
      { getLogo(size) }
    </div>
  )
}