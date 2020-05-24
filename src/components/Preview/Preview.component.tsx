import React from 'react'

interface PreviewProps {
  title: string
  qandas: QandA[]
  prev: string
  prevStep: () => void
}

export interface QandA {
  question: string
  answer: string
}

export const Preview = ({
  title,
  qandas,
  prev,
  prevStep,
}: PreviewProps) => (
  <>
    <h1>{title}</h1>
    {qandas.map(({ question, answer }) => (
      <>
        <h2>{question}</h2>
        <p>{answer}</p>
      </>
    ))}

    <div className="navigation">
      <button onClick={prevStep} className="navigationLeft">{prev}</button>
    </div>
  </>
)
