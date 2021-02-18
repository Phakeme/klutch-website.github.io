import  {Navbar} from '../Components/Navbar'
// import logo from '../public/brand-logo.svg'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
<Navbar/>
{/* <img src={logo}/> */}
  <Component {...pageProps} />
  </>)
}

export default MyApp
