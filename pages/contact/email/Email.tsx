import React from "react";
import Image from "next/image";
import { Email as EmailComponent } from "../../../components/Email";

export default function Email() {
  return (
    <div className=''>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="relative w-full h-96">
          <Image src="/images/frank_the_plumber_sink_3.jpeg" layout='fill' objectFit="cover" alt="WorkImage1" />
          <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-accent-1"></div>
          <h1 className="text-5xl text-main-1 absolute left-8 bottom-8 uppercase">
            How can we help?
          </h1>
        </div>
        <div className="p-8 bg-accent-1">
          <EmailComponent />
        </div>
        <div className="p-8 space-y-4">
          <h1 className="text-3xl text-center">Or email us at:</h1>
          <div className="flex items-center justify-center">
            <a className="button p-4 bg-accent-2 text-main-1 rounded-md text-lg" href="mailto:frankyourplumber@gmail.com">frankyourplumber@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <h1 className="text-5xl uppercase text-accent-1 my-8 text-center">How can we help?</h1>
        <div className="flex h-[500px]">
          <div className="h-full w-1/3 relative">
            <Image src="/images/frank_the_plumber_sink_3.jpeg" layout='fill' objectFit="cover" alt="WorkImage1" />
          </div>
          <div className="w-2/3  bg-accent-1 p-8 overflow-y-scroll space-y-8">
            <EmailComponent />
          </div>
        </div>
        <div className="p-8 flex items-center justify-center">
          <div className="space-y-8">
            <h1 className="text-3xl text-center">Or email us at:</h1>
            <div>
              <a className="button p-4 bg-accent-2 hover:bg-accent-3 text-main-1 rounded-md text-xl" href="mailto:frankyourplumber@gmail.com">frankyourplumber@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}