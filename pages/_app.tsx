import '../styles/globals.css'
import { AppProps } from 'next/app'
import Script from 'next/script'
import { useState } from 'react';
import Head from 'next/head';
import { useAnalytics } from '../lib/googleAnalyticsHook';
import { MobileNav } from '../components/MobileNav';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function App({ Component, pageProps }: AppProps) {
  const [isNavShowing, setIsNavShowing] = useState(false)


  
  return (
    <>
      <Head>
        <title>Frank The Plumber</title>

        
      </Head>
      
      <div className="">
        <Header onNav={()=> setIsNavShowing(true)}/>
        <MobileNav isOpen={isNavShowing} onClose={() => setIsNavShowing(false)}/>
        <Component className="grow mt-24" {...pageProps}/>
        <Footer/>
      </div>
    </>
  ) 
}

export default App