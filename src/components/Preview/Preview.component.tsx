import React, { Fragment } from 'react'

export interface PreviewProps {
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
    <h1 data-testid="preview-title">{title}</h1>
    {qandas.map(({ question, answer }, key) => (
      <Fragment key={key}>
        <h2>{question}</h2>
        <p>{answer}</p>
      </Fragment>
    ))}

    <div className="navigation">
      <button
        onClick={prevStep}
        className="navigationLeft"
        data-testid="button-prev"
      >
        {prev}
      </button>
    </div>
  </>
)
