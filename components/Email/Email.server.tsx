import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Email() {
  const form = useRef();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  let [emailSent, setEmailSent] = useState(false);
  let [lockButton, setLockButton] = useState(false);
  let [buttonText, setButtonText] = useState("Send");
  let [captchaToken, setCaptchaToken] = useState<string | null>(null);
  let [error, setError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please verify that you are not a robot.");
      return;
    }

    setError(null);
    setLockButton(true);

    const formData = new FormData(form.current);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    data["g-recaptcha-response"] = captchaToken;

    let response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data)
    })
    if (response.ok === false) {
      setEmailSent(false);
      setLockButton(false);
      setButtonText("Error!");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
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
          {siteKey &&
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={siteKey}
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />
          }
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <input disabled={lockButton} type="submit" value={buttonText} className={`p-2 w-full ${!lockButton ? 'bg-accent-2 hover:bg-accent-3 cursor-pointer' : 'bg-main-3'} text-main-1 rounded-md`} />
        </form>
      }
    </div>
  );
}
