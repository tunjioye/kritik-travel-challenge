import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { fetchCountries, fetchCountry } from '../src/services/country'
import { selectRandomItems } from '../src/utils'

const NUM_OF_RANDOM_ITEMS = 10

export default function Home() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [selectedCountries, setSelectedCountries] = useState([])

  const fetchRandomCountries = async () => {
    setLoading(true)
    await fetchCountries({
      success: (response) => {
        const { body: countries = [] } = response || {}
        const randomlySelectedCountries = selectRandomItems(countries, NUM_OF_RANDOM_ITEMS)
        setSelectedCountries(randomlySelectedCountries)
      },
      error: (error) => setError(error),
      done: () => setLoading(false),
    })
  }

  const generateGroupings = () => {
    window.alert('generating mutual neighbours')
  }


  useEffect(() => {
    fetchRandomCountries()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Ktitik Travel Challenge</title>
        <meta name="description" content="a solution to Kritik Frontend Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {error && <div className={styles.error}>{error.message}</div>}

        <button type="button" onClick={generateGroupings}>
          Generate Groupings
        </button>

        <section className={styles.section}>
          <h2>Selected Countries</h2>
          {loading && <p className={styles.loading}>loading random countries ...</p>}
          {!loading && selectedCountries.length === 0 && <p>No countries selected</p>}
          {!loading && selectedCountries.length > 0 && (
            <ul className="selected-countries">
              {selectedCountries.map((country) => (
                <li key={country.name}>{country.name}</li>
              ))}
            </ul>
          )}
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
