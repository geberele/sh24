import React from 'react'
import { useForm } from 'react-hook-form'

export interface Step2FormProps {
  label: string
  question: string
  next: string
  prev: string
  value: string
  errorMessage: string
  nextStep: () => void
  prevStep: () => void
  onChange: (value: string) => void
}

export const Step2Form = ({
  label,
  question,
  next,
  prev,
  value,
  nextStep,
  prevStep,
  onChange,
  errorMessage,
}: Step2FormProps) => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <form onSubmit={handleSubmit(nextStep)}>
      <h1>{question}</h1>
      <label htmlFor="email">{label}</label>
      <input
        name="email"
        ref={register({
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: errorMessage,
          },
        })}
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid="input-email"
      />

      {errors.email &&
      <div
        className="error"
        data-testid="input-error"
      >
        {errorMessage}
      </div>
      }

      <div className="navigation">
        <button
          onClick={prevStep}
          className="navigationLeft"
          data-testid="button-prev"
        >
          {prev}
        </button>
        <button
          type="submit"
          className="navigationRight"
          data-testid="button-next"
        >
          {next}
        </button>
      </div>
    </form>
  )
}
