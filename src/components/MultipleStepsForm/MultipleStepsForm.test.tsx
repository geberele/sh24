import React from 'react'
import {
  getOptionLabel,
  getOptionValue,
  MultipleStepsForm,
  MultipleStepsFormProps,
} from './MultipleStepsForm.component'
import { Options } from '../Step3Form/Step3Form.component'
import { en } from './i18n/i18n'
import { fireEvent, waitFor, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('getOptionLabel', () => {
  const options: Options[] = [
    { label: en.options1, value: 'one' },
    { label: en.options2, value: 'two' },
    { label: en.options3, value: 'three' },
  ]

  it('returns the correct value', () => {
    expect(getOptionLabel('one', options)).toBe(en.options1)
    expect(getOptionLabel('', options)).toBe('')
  })
})

describe('getOptionValue', () => {
  const options: Options[] = [
    { label: en.options1, value: 'one' },
    { label: en.options2, value: 'two' },
    { label: en.options3, value: 'three' },
  ]

  it('returns the correct value', () => {
    expect(getOptionValue(en.options2, options)).toBe('two')
    expect(getOptionValue('', options)).toBe('')
  })
})

describe('MultipleStepsForm', () => {
  const props: MultipleStepsFormProps = {
    language: 'en',
  }

  it('returns the correct value', async () => {
    const utils = render(<MultipleStepsForm {...props} />)
    const name = 'Mark'
    const email = 'test@example.com'
    const service = 'Other'

    expect(screen.getByTestId('input-name')).toBeInTheDocument()
    fireEvent.change(screen.getByTestId('input-name'), { target: { value: name } })
    fireEvent.click(screen.getByTestId('button-next'))
    await waitFor(() => expect(screen.getByTestId('input-email')).toBeInTheDocument())
    fireEvent.change(screen.getByTestId('input-email'), { target: { value: email } })
    fireEvent.click(screen.getByTestId('button-next'))
    await waitFor(() => expect(screen.getAllByTestId('input-service').length > 0).toBeTruthy())
    fireEvent.click(screen.getByText(service))
    fireEvent.click(screen.getByTestId('button-next'))
    await waitFor(() => expect(screen.getByTestId('preview-title')).toBeInTheDocument())
    expect(screen.getByText(name)).toBeInTheDocument()
    expect(screen.getByText(email)).toBeInTheDocument()
    expect(screen.getByText(service)).toBeInTheDocument()
  })
})
