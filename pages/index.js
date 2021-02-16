import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div class="container mx-auto">
      <Head>
        <title>Klutch Plastic Surgery Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Klutch Plastic Surgery
        </h1>
      </main>
    </div>
  )
}
