import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, waitFor, screen } from '@testing-library/dom'
import { Step2Form, Step2FormProps } from './Step2Form.component'
import { en } from '../MultipleStepsForm/i18n/i18n'

describe('Step2Form', () => {
  const prevStep = jest.fn()
  const nextStep = jest.fn()

  const props: Step2FormProps = {
    question: en.question2,
    label: en.labelEmail,
    prev: en.prev,
    next: en.next,
    value: name,
    prevStep: prevStep,
    nextStep: nextStep,
    onChange: () => {
      return
    },
    errorMessage: en.errorMessage2,
  }

  const setup = () => {
    const utils = render(<Step2Form {...props}/>)
    const input = screen.getByTestId('input-email') as HTMLInputElement
    const prevButton = screen.getByTestId('button-prev') as HTMLInputElement
    const submit = screen.getByTestId('button-next') as HTMLInputElement
    return {
      input,
      prevButton,
      submit,
      ...utils,
    }
  }

  it('renders', () => {
    const { asFragment } = setup()
    expect(asFragment()).toMatchSnapshot()
  })

  it('returns error if email is not valid', async () => {
    const { input, submit } = setup()
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.click(submit)
    const error = await waitFor(() => screen.getByTestId('input-error'))
    expect(error.textContent).toBe(en.errorMessage2)
  })

  it('submits the form if email is valid', async () => {
    const { input, submit } = setup()
    fireEvent.change(input, { target: { value: 'test@example-mail.com' } })
    fireEvent.click(submit)
    await waitFor(() => expect(nextStep).toHaveBeenCalledTimes(1))
  })

  it('goes to the previous step', async () => {
    const { prevButton } = setup()
    fireEvent.click(prevButton)
    await waitFor(() => expect(prevStep).toHaveBeenCalledTimes(1))
  })
})
