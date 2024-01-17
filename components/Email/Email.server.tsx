import React, { useRef, useState } from "react";

export default function Email() {
  const form = useRef();
  let [emailSent, setEmailSent] = useState(false);
  let [lockButton, setLockButton] = useState(false);
  let [buttonText, setButtonText] = useState("Send");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLockButton(true);

    const formData = new FormData(form.current);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    let response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data)
    })
    if (response.ok === false) {
      setEmailSent(false);
      setLockButton(false);
      setButtonText("Error!");
    } else {
      setEmailSent(true);
      setButtonText("Email sent!");
    }
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
          <input disabled={lockButton} type="submit" value={buttonText} className={`p-2 w-full ${!lockButton ? 'bg-accent-2 hover:bg-accent-3 cursor-pointer' : 'bg-main-3'} text-main-1 rounded-md`} />
        </form>
      }
    </div>
  );
}