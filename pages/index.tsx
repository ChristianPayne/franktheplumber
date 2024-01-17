import Image from "next/image";
import { useState } from "react";
import { Button } from "../components/Button";

export default function Index() {

  return (
    <div>
      {/* Mobile Hero */}
      <div className="lg:hidden">
        <div className="relative w-full h-[500px]">
          <Image src="/images/frank_the_plumber_headshot_1.jpeg" layout='fill' objectFit="cover" alt="Frank The Plumber" objectPosition="top" loading="lazy" />
          <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-accent-1"></div>
          <h1 className="text-5xl text-main-1 absolute left-8 bottom-8 uppercase">Your <br />plumber <br />for life</h1>
        </div>

        <div className="content bg-accent-1 text-main-1 mb-12 space-y-4 lg:w-1/2">
          <p>Frank is an independent licensed contractor that believes in doing it right the first time.</p>
          <p>He uses the highest quality parts available to ensure the work he does lasts.</p>
          <p>When they say they don&apos;t make them like they used to it&apos;s because they have not met Frank.</p>
        </div>
      </div>

      {/* Desktop Hero */}
      <div className="hidden lg:block">
        <div className="lg:h-[540px] 2xl:h-[1200px] flex relative">
          <div className="h-full w-1/2 relative overflow-hidden">
            <Image
              src="/images/frank_the_plumber_headshot_1.jpeg"
              alt="Frank The Plumber"
              loading="lazy"
              fill={true}
              objectPosition="top"
              objectFit="cover"
            />
          </div>
          <div className="relative w-1/2 flex h-full items-center justify-center">
            {/* <div className="absolute inset-0 bg-gradient-to-t from-accent-1"></div> */}
            <h1 className="text-6xl font-medium text-main-3 uppercase">Your <br />plumber <br />for life</h1>
          </div>
        </div>

        <div className="content bg-accent-1 lg:bg-main-1 text-main-1 lg:text-accent-1 mb-12 space-y-4 flex items-center justify-center">
          <div>
            <p>Frank is an independent licensed contractor that believes in doing it right the first time.</p>
            <p>He uses the highest quality parts available to ensure the work he does lasts.</p>
            <p>When they say they don&apos;t make them like they used to it&apos;s because they have not met Frank.</p>
          </div>
        </div>
      </div>

      <div className="content flex justify-center">
        <Button name="Schedule an Appointment" href="/contact" className="mb-12 bg-accent-2 hover:bg-accent-3 text-main-1" />
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative w-full h-[500px]">
        <Image src="/images/frank_the_plumber_sink_1.jpeg" layout='fill' objectFit="cover" alt="Underneath sink" />
        <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-main-1"></div>
        <h1 className="text-5xl font-medium absolute left-8 bottom-8">No job <br />too small</h1>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex w-full h-[500px] bg-accent-1">
        <div className="w-1/2 flex items-center justify-center">
          <h1 className="text-5xl text-main-1 font-medium uppercase">No job <br />too small</h1>
        </div>
        <div className="relative w-1/2">
          <Image src="/images/frank_the_plumber_sink_1.jpeg" layout='fill' objectPosition="top" objectFit="cover" alt="Underneath sink" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="content space-y-12">
          <p className="">Whether it be a flooded bathroom or a leaky faucet, Frank will stop by to inspect what needs to be done. <br /> His priority is making you feel comfortable calling him for any issue that might arise.</p>
          <p>Licensed plumber proudly servicing the Southern California region for over 25 years.</p>
          <div className="flex justify-center">
            <Button name="Contact" href="/contact" className=" bg-accent-2 hover:bg-accent-3 text-main-1" />
          </div>
        </div>
      </div>
    </div>
  )
}