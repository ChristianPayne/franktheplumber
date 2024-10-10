import React, { forwardRef } from "react";
import Image from "next/image";
import Frank_Logo from "/assets/logo/Frank_Logo.svg";
import FrankThePlumber_Logo from "/assets/logo/FrankThePlumber.svg";
import FrankThePlumber_Logo_Full from "/assets/logo/FrankThePlumber_Logo_Full_Trademark.svg";

type Props = {
  size: 'small' | 'medium' | 'large',
  className?: string
}

const Logo = forwardRef(({ size = 'small', className = "" }: Props, ref) => {
  function getLogo(logoSize) {
    switch (logoSize) {
      case 'small':
        return <Image src={Frank_Logo} height={100} width={160} alt="Logo" />;
      case 'medium':
        return <Image src={FrankThePlumber_Logo} alt="Logo" />;
      case 'large':
        return <Image src={FrankThePlumber_Logo_Full} width={400} alt="Logo" className={"cursor-pointer " + className} />;
      default:
        throw new Error(`Logo size incorrect. Passed in '${logoSize}'`);
    }
  }

  return (
    getLogo(size)
  )
})

Logo.displayName = "Stupid Linter";

export default Logo