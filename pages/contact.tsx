import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "../components/Button";

export default function Contact() {
  return (
    <div className="">
      {/* Mobile */}
      <div className="relative w-full h-96 lg:hidden">
        <Image src="/images/frank_the_plumber_sink_2.jpeg" layout='fill' objectFit="cover" alt="WorkImage2" />
        <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-accent-1"></div>
        <h1 className="text-5xl text-main-1 absolute left-8 bottom-8 uppercase">
          Reach out<br /> today
        </h1>
      </div>
      {/* Desktop */}
      <div className="w-full h-96 hidden lg:flex">
        <div className="relative h-full w-1/2">
          <Image src="/images/frank_the_plumber_sink_2.jpeg" layout='fill' objectFit="cover" alt="WorkImage2" />
        </div>

        <h1 className="text-5xl bg-accent-1 text-main-1 uppercase w-1/2">
          <div className="flex items-center justify-center h-full font-medium">
            <div>
              <p>Reach out<br /> today</p>
              <p className="font-normal">(714) 482-5144</p>
            </div>
          </div>
        </h1>
      </div>

      <div className="py-12 space-y-8 lg:mx-auto lg:w-1/2 flex flex-col items-center justify-center">
        <Button name="Email" className="bg-accent-2 text-main-1 hover:bg-accent-3" href="contact/email" />
        <Button name="Call" className="lg:hidden bg-accent-2 text-main-1 hover:bg-accent-3" href="tel:+17144825144" />
        <Button name="Yelp" className="bg-accent-2 text-main-1 hover:bg-accent-3" href="https://www.yelp.com/biz/frank-the-plumber-la-habra" />
      </div>
    </div>
  )
}