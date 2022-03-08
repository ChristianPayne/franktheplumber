import { useState } from "react";
import { Button } from "../components/Button";

export default function Index () {
  
  return (
    <div>

      {/* Contact */}
      <div className="content">
        <h1 className="font-bold text-4xl mb-8">&quot;No job <br/>too small.&quot;</h1>
        <p className="mb-12">Whether it be a flooded bathroom or a leaky faucet, Frank will stop by to inspect what needs to be done. His priority is making you feel comfortable calling him for any issue that might arise.</p>
        <Button name="Contact" href="/contact" className="mb-12"/>
        <p className="mb-12">Licensed plumber proudly servicing the Southern California Region for over 25 years.</p>
      </div>
    </div>
  )
}