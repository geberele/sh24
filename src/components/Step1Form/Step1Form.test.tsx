import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, waitFor, screen } from '@testing-library/dom'
import { Step1Form, Step1FormProps } from './Step1Form.component'
import { en } from '../MultipleStepsForm/i18n/i18n'

describe('Step1Form', () => {
  const nextStep = jest.fn()

  const props: Step1FormProps = {
    question: en.question1,
    label: en.labelName,
    next: en.next,
    value: name,
    nextStep: nextStep,
    onChange: () => {
      return
    },
    errorMessage: en.errorMessage1,
  }

  const setup = () => {
    const utils = render(<Step1Form {...props}/>)
    const input = screen.getByTestId('input-name') as HTMLInputElement
    const submit = screen.getByTestId('button-next') as HTMLInputElement
    return {
      input,
      submit,
      ...utils,
    }
  }

  it('renders', () => {
    const { asFragment } = setup()
    expect(asFragment()).toMatchSnapshot()
  })

  it('returns error if characters less than 2', async () => {
    const { input, submit } = setup()
    fireEvent.change(input, { target: { value: '2' } })
    fireEvent.click(submit)
    const error = await waitFor(() => screen.getByTestId('input-error'))
    expect(error.textContent).toBe(en.errorMessage1)
  })

  it('returns error if characters more than 25', async () => {
    const { input, submit } = setup()
    fireEvent.change(input, { target: { value: '12345678912345678912345678' } })
    fireEvent.click(submit)
    const error = await waitFor(() => screen.getByTestId('input-error'))
    expect(error.textContent).toBe(en.errorMessage1)
  })

  it('submits the form if name is valid', async () => {
    const { input, submit } = setup()
    fireEvent.change(input, { target: { value: 'Mike' } })
    fireEvent.click(submit)
    await waitFor(() => expect(nextStep).toHaveBeenCalledTimes(1))
  })
})
