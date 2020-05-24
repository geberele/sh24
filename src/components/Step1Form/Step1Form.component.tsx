import React from 'react'
import { useForm } from 'react-hook-form'

interface Step1FormProps {
  label: string
  question: string
  next: string
  value: string
  errorMessage: string
  nextStep: () => void
  onChange: (value: string) => void
}

export const Step1Form = ({
  label,
  question,
  next,
  value,
  nextStep,
  onChange,
  errorMessage,
}: Step1FormProps) => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <form onSubmit={handleSubmit(nextStep)}>
      <h1>{question}</h1>
      <label htmlFor="name">{label}</label>
      <input
        name="name"
        ref={register({ required: true, minLength: 2, maxLength: 25 })}
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {errors.name &&
      <div className="error">{errorMessage}</div>
      }

      <div className="navigation">
        <button type="submit" className="navigationRight">{next}</button>
      </div>
    </form>
  )
}
