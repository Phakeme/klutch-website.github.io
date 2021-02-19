import Head from 'next/head'
import HeroSection from '../Components/HeroSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import styles from '../styles/Home.module.css'
// import logo from '/../public/brand-logo.svg'
// import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Klutch Plastic Surgery Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
        <HeroSection text="Hero Section"/>
        <br/>
        <HeroSection text="Services Section"/>
        <br/>
        <WhyChooseUs text="Why choose us"/>
    </div>
  )
}
