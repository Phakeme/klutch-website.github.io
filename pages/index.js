import Head from 'next/head'
// import { Container } from '../components/global/container'
import { HeaderContainer } from "../containers/header"

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
  <HeaderContainer>
    <span>Header Section</span>
  </HeaderContainer>
    </div>
  )
}
