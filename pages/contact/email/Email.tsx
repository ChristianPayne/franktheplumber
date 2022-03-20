import React from "react";
import Image from "next/image";
import { Email as EmailComponent} from "../../../components/Email";

export default function Email () {
  return (
    <div className=''>
      <div className="relative w-full h-96">
        <Image src="https://dummyimage.com/400x600/666666/fff.jpg" layout='fill' objectFit="cover" alt="WorkImage1"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-accent-1"></div>
        <h1 className="text-5xl text-main-1 absolute left-8 bottom-8 uppercase">
          How can we help?
        </h1>
      </div>
      <div className="p-8 bg-accent-1">
        <EmailComponent/>
      </div>
      <div className="p-8">
        <h1 className="text-5xl">Or Email Us</h1>
        <a className="button" href="mailto:frankyourplumber@gmail.com">frankyourplumber@gmail.com</a>
      </div>
    </div>
  )
}