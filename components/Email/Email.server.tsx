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
    <form ref={form} onSubmit={sendEmail}>
      <div className="block">
        <label>First Name</label>
        <input type="text" name="first_name" />
      </div>
      <div className="block">
        <label>Last Name</label>
        <input type="text" name="last_name" />
      </div>
      <div className="block">
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div className="block">
        <label>Message</label>
        <textarea name="message" />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}