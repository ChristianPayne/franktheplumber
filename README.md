# Frank The Plumber

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values.

The contact form is protected by **Google reCAPTCHA v2** to stop spam. To set it up:

1. Go to https://www.google.com/recaptcha/admin and register a new site.
2. Choose **reCAPTCHA v2 → "I'm not a robot" Checkbox**.
3. Add your domain(s) (include `localhost` for local development).
4. Copy the **Site Key** into `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
5. Copy the **Secret Key** into `RECAPTCHA_SECRET_KEY`.

Restart the dev server after changing env values.
