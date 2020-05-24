import { MultipleStepsForm } from '../src/components/MultipleStepsForm/MultipleStepsForm.component'
import React, { useState } from 'react'
import Head from 'next/head'
import cn from 'classnames'

export default function Home() {
  const [language, setLanguage] = useState('en')

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <main>
          <div className="wrapper">
            <MultipleStepsForm language={language}/>
          </div>
        </main>
        <footer>
          <h4>Choose a language</h4>
          <div className="radio-buttons">
            {['en', 'it'].map((ln, key) => (
              <div
                key={key}
                className={cn('radio-button', { 'selected': ln === language })}
              >
                <label htmlFor={ln}>{ln}</label>
                <input
                  type="radio"
                  name="language"
                  value={ln}
                  id={ln}
                  onChange={e => setLanguage(e.target.value)}
                  checked={ln === language}
                  className="hidden"
                />
              </div>
            ))}
          </div>
        </footer>
      </div>
    </>
  )
}
