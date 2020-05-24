import React, { useState } from 'react'
import { Step1Form } from '../Step1Form/Step1Form.component'
import { Step2Form } from '../Step2Form/Step2Form.component'
import { Options, Step3Form } from '../Step3Form/Step3Form.component'
import { Preview, QandA } from '../Preview/Preview.component'
import { I18N } from './i18n/i18n.types'

interface MultipleStepsFormProps {
  language: string
}

export const MultipleStepsForm = (props: MultipleStepsFormProps) => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')

  let i18n: I18N

  if (props.language === 'it') {
    i18n = require('./i18n/i18n.ts').it
  } else {
    i18n = require('./i18n/i18n.ts').en
  }

  const options: Options[] = [
    { label: i18n.options1, value: 'one' },
    { label: i18n.options2, value: 'two' },
    { label: i18n.options3, value: 'three' },
  ]

  const qandas: QandA[] = [
    { question: i18n.question1, answer: name },
    { question: i18n.question2, answer: email },
    { question: i18n.question3, answer: service },
  ]

  switch (step) {
    default:
    case 1:
      return (
        <Step1Form
          question={i18n.question1}
          label={i18n.labelName}
          next={i18n.next}
          value={name}
          nextStep={() => setStep(2)}
          onChange={(value: string) => setName(value)}
          errorMessage={i18n.errorMessage1}
        />
      )
    case 2:
      return (
        <Step2Form
          question={i18n.question2}
          label={i18n.labelEmail}
          next={i18n.next}
          prev={i18n.prev}
          value={email}
          nextStep={() => setStep(3)}
          prevStep={() => setStep(1)}
          onChange={(value: string) => setEmail(value)}
          errorMessage={i18n.errorMessage2}
        />
      )
    case 3:
      return (
        <Step3Form
          question={i18n.question3}
          next={i18n.next}
          prev={i18n.prev}
          value={service}
          options={options}
          nextStep={() => setStep(4)}
          prevStep={() => setStep(2)}
          onChange={(value: string) => setService(value)}
          errorMessage={i18n.errorMessage3}
        />
      )
    case 4:
      return (
        <Preview
          title={i18n.previewTitle}
          prevStep={() => setStep(3)}
          qandas={qandas}
          prev={i18n.prev}
        />
      )
  }
}
