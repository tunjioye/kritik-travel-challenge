import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ktitik Travel Challenge</title>
        <meta name="description" content="a solution to Kritik Frontend Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Selected Countries</h2>
          <ul className="selected-countries">
            <li>10 randomly selected countries will show up here</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Neighbors</h2>
          <ul className="neighboring-countries">
            <li>Mutual neighboring countries will show up here</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/tunjioye/kritik-travel-challenge"
          target="_blank"
          rel="noreferrer"
        >
          Solution by Tunji Oyeniran
        </a>
      </footer>
    </div>
  )
}
