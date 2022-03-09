import Image from "next/image";
import { useState } from "react";
import { Button } from "../components/Button";

export default function Index () {
  
  return (
    <div>
      <div className="relative w-full h-96">
        <Image src="https://dummyimage.com/400x600/666666/fff.jpg" layout='fill' objectFit="cover" alt="WorkImage1"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-accent-1"></div>
        <h1 className="font-montserrat text-5xl text-main-1 absolute left-8 bottom-8 uppercase">&quot;Your <br/>plumber <br/>for life&quot;</h1>
      </div>

      <div className="content bg-accent-1 text-main-1 mb-12">
        <p>Frank is an independent Licensed Contractor that believes in doing it right the first time. He uses the highest quality parts available to ensure the work he does lasts.
        When they say they don’t make them like they used to it’s because they have not met Frank.</p>
      </div>

      <div className="content">
        <Button name="View Work" href="/services" className="mb-12 bg-accent-2 text-main-1"/>
      </div>

      <div className="relative w-full h-96">
        <Image src="https://dummyimage.com/400x600/666666/fff.jpg" layout='fill' objectFit="cover" alt="WorkImage1"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-main-1"></div>
        <h1 className="font-montserrat text-5xl font-bold absolute left-8 bottom-8">&quot;No job <br/>too small.&quot;</h1>
      </div>

      <div className="content">
        <p className="mb-12">Whether it be a flooded bathroom or a leaky faucet, Frank will stop by to inspect what needs to be done. His priority is making you feel comfortable calling him for any issue that might arise.</p>
        <Button name="Contact" href="/contact" className="mb-12 bg-accent-2 text-main-1"/>
        <p className="mb-12">Licensed plumber proudly servicing the Southern California Region for over 25 years.</p>
      </div>
    </div>
  )
}