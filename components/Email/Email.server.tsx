import React, { useRef, useState } from "react";
import { sendForm } from '@emailjs/browser';

let { NEXT_PUBLIC_EMAILJS_SERVICE } = process.env;
let { NEXT_PUBLIC_EMAILJS_TEMPLATE } = process.env;
let { NEXT_PUBLIC_EMAILJS_USERID } = process.env;

export default function Email() {
  const form = useRef();
  let [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailSent(true);

    console.log(NEXT_PUBLIC_EMAILJS_SERVICE, NEXT_PUBLIC_EMAILJS_TEMPLATE, NEXT_PUBLIC_EMAILJS_USERID)

    sendForm(NEXT_PUBLIC_EMAILJS_SERVICE, NEXT_PUBLIC_EMAILJS_TEMPLATE, form.current, NEXT_PUBLIC_EMAILJS_USERID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log("GOT AN ERROR:", error.text);
      });
  };

  return (
    <div className="h-full">
      {emailSent ?
        <div className="text-main-1 flex flex-col h-full items-center justify-center">
          <h2 className="text-2xl">Thank you for sending us an email!</h2>
          <p>We will contact you as soon as possible.</p>
        </div>
        :
        <form ref={form} onSubmit={sendEmail} className="space-y-4 p-4">
          <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
            <input type="text" name="first_name" required placeholder="First Name" className="block rounded-md w-full" />
            <input type="text" name="last_name" required placeholder="Last Name" className="block rounded-md w-full" />
          </div>
          <input type="email" name="email" required placeholder="Your email" className="block rounded-md w-full" />
          <input type="tel" name="phone" required placeholder="Your phone number" className="block rounded-md w-full" />
          <textarea name="message" required placeholder="What needs to be done?" className="block rounded-md w-full" />
          <input disabled={emailSent} type="submit" value={emailSent === false ? "Send" : "Sent!"} className={`p-2 w-full ${!emailSent ? 'bg-accent-2 cursor-pointer' : 'bg-main-3'} text-main-1 rounded-md`} />
        </form>
      }
    </div>
  );
}