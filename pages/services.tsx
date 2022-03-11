import React from "react";
import Image from "next/image";
import { Button } from "../components/Button";
import { ServicesSwiper } from "../components/ServicesSwiper";

export default function services () {

  return (
    <div>

      <div className="relative w-full h-96">
        <Image src="https://dummyimage.com/400x600/666666/fff.jpg" layout='fill' objectFit="cover" alt="WorkImage1"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-accent-1"></div>
        <h1 className="text-5xl text-main-1 absolute left-8 bottom-8 uppercase">Services</h1>
      </div>

      <div className="content bg-accent-1 text-main-1 mb-12">
        <ul className="list-disc px-4">
          <li>Kitchen and bath faucet repairs</li>
          <li>Shower valve repairs</li>
          <li>Water heater installs and repairs</li>
          <li>Toilet repairs and installs</li>
          <li>Dish washer installs</li>
          <li>Refrigerator water lines</li>
          <li>Gas lines</li>
          <li>Decorative</li>
          <li>Hose bibb repairs</li>
        </ul>
      </div>

      {/* Swiper */}
      {/* <ServicesSwiper/> */}

      <div className="content">
        <Button name="Contact" href="/contact" className="mb-12 bg-accent-2 text-main-1"/>
      </div>
    </div>
  )
}