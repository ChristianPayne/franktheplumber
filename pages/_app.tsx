import { AppProps } from 'next/app'
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { MobileNav } from '../components/MobileNav';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const mainRef = useRef();
  const [fixFooter, setFixFooter] = useState(false);
  const router = useRouter()

  // Set the footer to a fixed position if the page is smaller than the screen.
  useEffect(() => {
    if (mainRef.current === undefined || mainRef.current === null) {
      console.log("I'm broken");
    } else {
      //@ts-ignore
      // console.log(mainRef.current.clientHeight, window.screen.height);

      //@ts-ignore
      mainRef.current.clientHeight < (window.screen.height * 0.7) && window.screen.height < 720 ? setFixFooter(true) : setFixFooter(false)
    }
  }, [router.pathname])

  return (
    <div className="flex flex-col max-w-[1920px] mx-auto">
      <Head>
        <title>Frank The Plumber</title>
      </Head>

      <Header onNav={() => setIsNavShowing(true)} />
      <MobileNav isOpen={isNavShowing} onClose={() => setIsNavShowing(false)} />
      <div ref={mainRef} className="grow">
        <Component {...pageProps} />
      </div>
      <Footer fixed={fixFooter} />
    </div>
  )
}

export default App