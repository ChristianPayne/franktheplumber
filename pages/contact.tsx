import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "../components/Button";
import { Email } from "../components/Email";

export default function Contact () {
  return (
   <div>
     <div className="relative w-full h-96">
        <Image src="https://dummyimage.com/400x600/666666/fff.jpg" layout='fill' objectFit="cover" alt="WorkImage1"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-accent-1"></div>
        <h1 className="font-montserrat text-5xl text-main-1 absolute left-8 bottom-8 uppercase">
        Reach out<br/> today</h1>
      </div>

      <Email/>
   </div>
  )
}