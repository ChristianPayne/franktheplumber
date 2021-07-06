import Head from '../components/Head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {

  return (
    <>
      <Head title="Description of website."/>
      <Header absolute logo/>

      <main className="grid">
        {/* Hero */}
        <div className="grid-item hero">Hero</div>
        {/* Meet Frank Image */}
        <div className="grid-item meet-image">Meet Frank Image</div>
        {/* Meet Frank */}
        <div className="grid-item meet">Meet Frank</div>
        {/* Services Title */}
        <div className="grid-item services-title">Services Title</div>
        {/* Services */}
        <div className="grid-item services">Services</div>
        {/* Contact Title */}
        <div className="grid-item contact-title">Contact Title</div>
        {/* Contact */}
        <div className="grid-item contact">Contact</div>

        {/* <Image src="/test.jpg" alt="Hero Image" width={1920} height={1080} /> */}
      </main>

      {/* <footer>
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
      </footer> */}
    </>
  )
}
