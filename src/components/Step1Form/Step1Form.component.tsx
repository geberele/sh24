import React from 'react'
import { useForm } from 'react-hook-form'

export interface Step1FormProps {
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
        data-testid="input-name"
      />

      {errors.name &&
      <div
        className="error"
        data-testid="input-error"
      >
        {errorMessage}
      </div>
      }

      <div className="navigation">
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
