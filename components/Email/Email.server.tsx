import React, { useRef } from "react";
import { sendForm } from '@emailjs/browser';

let {NEXT_PUBLIC_EMAILJS_SERVICE} = process.env;
let {NEXT_PUBLIC_EMAILJS_TEMPLATE} = process.env;
let {NEXT_PUBLIC_EMAILJS_USERID} = process.env;

export default function Email () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(NEXT_PUBLIC_EMAILJS_SERVICE, NEXT_PUBLIC_EMAILJS_TEMPLATE, form.current, NEXT_PUBLIC_EMAILJS_USERID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <input type="text" name="first_name" placeholder="First Name" className="block rounded-md w-full"/>
      <input type="text" name="last_name" placeholder="Last Name" className="block rounded-md w-full"/>
      <input type="email" name="email" placeholder="Email" className="block rounded-md w-full"/>
      <textarea name="message" placeholder="Let us know how we can help you..." className="block rounded-md w-full"/>
      <input type="submit" value="Send" className="p-2 w-full bg-accent-2 text-main-1 rounded-md" />
    </form>
  );
}