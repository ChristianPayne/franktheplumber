const axios = require('axios');
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let { EMAILJS_SERVICE, EMAILJS_TEMPLATE, EMAILJS_USERID, EMAILJS_API_KEY, RECAPTCHA_SECRET_KEY } = process.env;

  if(EMAILJS_SERVICE === undefined) {
    console.error("❌ EMAILJS_SERVICE is undefined")
    return res.status(500).json({ message: "❌ EMAILJS_SERVICE is undefined" })
  }
  if(EMAILJS_TEMPLATE === undefined) {
    console.error("❌ EMAILJS_TEMPLATE is undefined")
    return res.status(500).json({ message: "❌ EMAILJS_TEMPLATE is undefined" })
  }
  if(EMAILJS_USERID === undefined) {
    console.error("❌ EMAILJS_USERID is undefined")
    return res.status(500).json({ message: "❌ EMAILJS_USERID is undefined" })
  }
  if(EMAILJS_API_KEY === undefined) {
    console.error("❌ EMAILJS_API_KEY is undefined")
    return res.status(500).json({ message: "❌ EMAILJS_API_KEY is undefined" })
  }
  if(RECAPTCHA_SECRET_KEY === undefined) {
    console.error("❌ RECAPTCHA_SECRET_KEY is undefined")
    return res.status(500).json({ message: "❌ RECAPTCHA_SECRET_KEY is undefined" })
  }

  let formData = JSON.parse(req.body);

  const captchaToken = formData["g-recaptcha-response"];
  if (!captchaToken) {
    console.error("❌ Missing reCAPTCHA token")
    return res.status(400).json({ message: "Please complete the reCAPTCHA." })
  }

  try {
    const verifyResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: captchaToken,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    if (!verifyResponse.data.success) {
      console.error("❌ reCAPTCHA verification failed:", verifyResponse.data['error-codes'])
      return res.status(400).json({ message: "reCAPTCHA verification failed." })
    }
  } catch (error) {
    console.error("❌ reCAPTCHA verification error:", error.message)
    return res.status(500).json({ message: "reCAPTCHA verification error." })
  }

  delete formData["g-recaptcha-response"];

  let requestData = {
    service_id: EMAILJS_SERVICE,
    template_id: EMAILJS_TEMPLATE,
    user_id: EMAILJS_USERID,
    accessToken: EMAILJS_API_KEY,
    template_params: {
      ...formData
    }
  }

  const url = 'https://api.emailjs.com/api/v1.0/email/send';

  try {
    const response = await axios.post(url, requestData);
    console.log('✅ Response:', response.data);
    return res.status(200).json({ message: "Email sent ok!" })
  } catch (error) {
    console.error('❌ Error:', error.message);
    return res.status(500).json({ message: error.message })
  }
}
