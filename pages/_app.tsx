import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  // Add a lang tag to the html tag to get SEO 100%
  useEffect(() => {
    let html = document.getElementsByTagName("html")[0]
    html.setAttribute('lang', 'en')
  }, []);
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      
      <Component {...pageProps} />
    </>
  ) 
}

export default App