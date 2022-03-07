import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAnalytics } from '../lib/googleAnalyticsHook';
import MobileNav from '../components/MobileNav';
import { Header } from '../components/Header';

function App({ Component, pageProps }: AppProps) {
  
  let {gtag, onButtonClick} = useAnalytics()

  const [isNavShowing, setIsNavShowing] = useState(false)

  // Add a lang tag to the html tag to get SEO 100%
  useEffect(() => {
    let html = document.getElementsByTagName("html")[0]
    html.setAttribute('lang', 'en')
  }, []);

  
  
  return (
    <>
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
      <Head>

        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap" rel="stylesheet" />
        <title>Frank The Plumber</title>
      </Head>
      
      <div className="fixed inset-0">
        <Header onNav={()=> setIsNavShowing(true)}/>
        <MobileNav isOpen={isNavShowing} onClose={() => setIsNavShowing(false)}/>
        <Component {...pageProps} />
      </div>
    </>
  ) 
}

export default App