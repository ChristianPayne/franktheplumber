import Image from "next/image";
import { useState } from "react";
import { Button } from "../components/Button";

export default function Index () {
  
  return (
    <div>

      {/* height={600} width={400} */}

      {/* Contact */}
      <div className="relative w-full h-96">
        <Image src="https://dummyimage.com/400x600/666666/fff.jpg" layout='fill' objectFit="cover" alt="WorkImage1"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-main-1"></div>
        <h1 className="font-montserrat text-4xl absolute left-4 bottom-4">&quot;No job <br/>too small.&quot;</h1>
      </div>
      <div className="content">
        <p className="mb-12">Whether it be a flooded bathroom or a leaky faucet, Frank will stop by to inspect what needs to be done. His priority is making you feel comfortable calling him for any issue that might arise.</p>
        <Button name="Contact" href="/contact" className="mb-12"/>
        <p className="mb-12">Licensed plumber proudly servicing the Southern California Region for over 25 years.</p>
      </div>
    </div>
  )
}