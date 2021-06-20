import '../styles/globals.css'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  console.log(Component);
  console.log(pageProps);
  
  return <Component {...pageProps} />
}

export default App