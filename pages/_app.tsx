import '../styles/globals.css'
import { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useAnalytics } from '../lib/googleAnalyticsHook';
import { MobileNav } from '../components/MobileNav';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function App({ Component, pageProps }: AppProps) {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const mainRef = useRef()

  // TRYING TO GET THIS REF PASSED TO THE FOOTER TO DYNAMICALLY MAKE IT FIXED.
  
  return (
    <div className="flex flex-col">
      <Head>
        <title>Frank The Plumber</title>
      </Head>
      
      <Header onNav={()=> setIsNavShowing(true)}/>
      <MobileNav isOpen={isNavShowing} onClose={() => setIsNavShowing(false)}/>
      <div className="grow">
        <Component ref={mainRef} {...pageProps}/>
      </div>
      <Footer mainPageRef={mainRef}/>
    </div>
  ) 
}

export default App