import Head from '../components/Head';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

export default function Home() {

  function toggleMobileSidebar() {
    console.log('test');
  }

  return (
    <>
      <Head title="Description of website."/>
      <Header absolute logo/>
      {/* <MobileNav/> */}

      <div className="mobile-menu-button" onClick={toggleMobileSidebar}>
        👉
      </div>

      <main className="grid">
        {/* Hero */}
        <div className="grid-item hero">
          Hero Image
        </div>
        {/* Meet Frank Image */}
        <div id="about" className="grid-item meet-image">Meet Frank Image</div>
        {/* Meet Frank */}
        <div className="grid-item meet">Meet Frank</div>
        {/* Services Title */}
        <div id="services" className="grid-item services-title title">Services</div>
        {/* Services */}
        <div className="grid-item services">Services</div>
        {/* Contact Title */}
        <div id="contact" className="grid-item contact-title title">Contact</div>
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
