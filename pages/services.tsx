import React from "react";
import Image from "next/image";
import { Button } from "../components/Button";
import { ServicesSwiper } from "../components/ServicesSwiper";

export default function services () {

  return (
    <>
      <div className="p-4">
        <h1 className="text-5xl my-8 text-main-3 uppercase font-medium">Services</h1>
        <ServicesSwiper/>
        
      </div>

      {/* <div className="content bg-accent-1 text-main-1 mb-12">
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
      </div> */}

      {/* Swiper */}

      <div className="content">
        <Button name="Contact" href="/contact" className="mb-12 bg-accent-2 text-main-1"/>
      </div>
    </>
  )
}