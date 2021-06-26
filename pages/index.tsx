import Head from '../components/Head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {

  return (
    <>
      <Head title="Description of website."/>

      <Header/>

      <main>
        This is the main page.
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
