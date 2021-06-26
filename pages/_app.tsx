import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  // Add a lang tag to the html tag to get SEO 100%
  useEffect(() => {
    let html = document.getElementsByTagName("html")[0]
    html.setAttribute('lang', 'en')
  }, []);
  
  return <Component {...pageProps} />
}

export default App