const axios = require('axios');
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let { EMAILJS_SERVICE, EMAILJS_TEMPLATE, EMAILJS_USERID, EMAILJS_API_KEY } = process.env;

  if(EMAILJS_SERVICE === undefined) {
    console.error("❌ EMAILJS_SERVICE is undefined")
    res.status(500).json({ message: "❌ EMAILJS_SERVICE is undefined" })
  }
  if(EMAILJS_TEMPLATE === undefined) {
    console.error("❌ EMAILJS_TEMPLATE is undefined")
    res.status(500).json({ message: "❌ EMAILJS_TEMPLATE is undefined" })
  }
  if(EMAILJS_USERID === undefined) {
    console.error("❌ EMAILJS_USERID is undefined")
    res.status(500).json({ message: "❌ EMAILJS_USERID is undefined" })
  }
  if(EMAILJS_API_KEY === undefined) {
    console.error("❌ EMAILJS_API_KEY is undefined")
    res.status(500).json({ message: "❌ EMAILJS_API_KEY is undefined" })
  }

  let formData = JSON.parse(req.body);
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

  

  axios.post(url, requestData)
    .then(response => {
      console.log('✅ Response:', response.data);
      res.status(200).json({message: "Email sent ok!"})
    })
    .catch(error => {
      console.error('❌ Error:', error.message);
      res.status(500).json({ message: error.message })
    });
}
