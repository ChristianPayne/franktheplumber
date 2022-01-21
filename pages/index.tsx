export default function Home () {
  // Starting redesign

  let services = [
    "Bathrooms",
    "Kitchens",
    "Laundry Rooms",
    "Gas Lines",
    "Decorative",
  ]

  let stats = [
    {
      stat: "25+",
      title: "Years Of Service"
    },
    {
      stat: "2000+",
      title: "Customers Served"
    },
    {
      stat: "30K+",
      title: "Installs"
    },
    {
      stat: "10+",
      title: "Cities Covered"
    },
  ]

  return (
    <>
      <section className="px-4 pt-16 md:py-32 mx-auto lg:max-w-7xl">
        <div className="w-full mx-auto text-center md:w-11/12 xl:w-8/12 md:text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold">Frank The Plumber</h1>
          <div className="flex items-center justify-center">
            <p className="bg-green-100 w-1/2 rounded text-gray-900 font-bold p-1 m-2">
              (714) 482-5144
            </p>
          </div>
          <p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
          Frank The Plumber is an independent licensed contractor. Frank specializes in repairs. He wants to save you money by installing superior fixtures and equipment that last for many years and can be repaired instead of replaced. If you have vintage fixtures you wish to keep, Frank is the plumber who can fix them. <span className="font-semibold">He is a master at repair.</span>
          </p>

          
          <div className="flex flex-col justify-start items-center mb-3 space-x-0 space-y-4 text-xs text-gray-600 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0">
          {
            services.map((element)=>{
                return (
                  <>
                    <div className="flex items-center">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-green-600">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {element}
                    </div>
                </>)
            })
          }
          </div>
        </div>
      </section>

      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {
            stats.map((element)=>{
              return (
                <>
                  <div className="flex flex-row justify-center items-center p-5">
                    <div className="flex items-center justify-center w-10 h-10 text-green-700 bg-green-100 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3 w-full">
                      <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate">{element.stat}</h2>
                      <p className="text-sm leading-none text-gray-600">{element.title}</p>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between px-4 py-12 mx-auto max-w-7xl md:flex-row">
        <p className="mb-8 text-sm text-center text-gray-700 md:text-left md:mb-0">Frank The Plumber | State License #C36-967360</p>
        <div className="flex items-center space-x-6">
          <a href="https://www.facebook.com/Frank-the-Plumber-184190448331140/" target="_blank" rel="noreferrer">
            <span className="sr-only">Facebook</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1298" height="2500" viewBox="88.428 12.828 107.543 207.085" className="w-5 h-5" aria-hidden="true">
              <path
                d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
                fill="#3c5a9a"
              />
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}