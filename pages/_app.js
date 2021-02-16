import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
<nav class="flex items-center flex-wrap bg-black p-6">
  <div class="container max-w-6xl max-w-screen-xl mx-auto flex justify-between  items-center flex-no-shrink">  
    <div class=" text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Klutch Plastic Surgery</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
      <div class="">
        <div>
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              About
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Services
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Sales
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Contacts
            </a>
          </div>
        </div>
    </div>
  </div> 
</nav>
  <Component {...pageProps} />
  </>)
}

export default MyApp
