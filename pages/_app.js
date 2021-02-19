import HeroSection from '../Components/HeroSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import  {Navbar} from '../Components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <br/>
      <WhyChooseUs text="Footer Section"/>
    </>
  )
}

export default MyApp
