import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { useAnalytics } from '../lib/googleAnalyticsHook';
import { GTag } from '../lib/gtag';


export default function Document () {

  let gtag = new GTag;
  
  return (
      <Html lang='en'>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"></link>

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          {/* End Google Analytics */}
        </Head>

        <body className='font-montserrat overflow-y-scroll'>
          <div className="mt-24">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
  )
}