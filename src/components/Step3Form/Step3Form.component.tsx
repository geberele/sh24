import React from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'

export interface Step3FormProps {
  question: string
  next: string
  prev: string
  value: string
  errorMessage: string
  options: Options[]
  nextStep: () => void
  prevStep: () => void
  onChange: (value: string) => void
}

export interface Options {
  label: string
  value: string
}

export const Step3Form = ({
  question,
  next,
  prev,
  options,
  nextStep,
  prevStep,
  onChange,
  value,
  errorMessage,
}: Step3FormProps) => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <form onSubmit={handleSubmit(nextStep)}>
      <h1>{question}</h1>
      <div className="radio-buttons">
        {options.map((option, key) => (
          <div
            key={key}
            className={cn('radio-button', { 'selected': value === option.value })}
          >
            <label htmlFor={option.value}>{option.label}</label>
            <input
              type="radio"
              name="service"
              value={option.value}
              id={option.value}
              onChange={e => onChange(e.target.value)}
              checked={value === option.value}
              ref={register({ required: true })}
              data-testid="input-service"
              className={cn('hidden', { 'checked': value === option.value })}
            />
          </div>
        ))}
      </div>

      {errors.service &&
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
