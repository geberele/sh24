import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, waitFor, screen } from '@testing-library/dom'
import { Options, Step3Form, Step3FormProps } from './Step3Form.component'
import { en } from '../MultipleStepsForm/i18n/i18n'

describe('Step3Form', () => {
  const prevStep = jest.fn()
  const nextStep = jest.fn()

  const options: Options[] = [
    { label: en.options1, value: 'one' },
    { label: en.options2, value: 'two' },
    { label: en.options3, value: 'three' },
  ]

  const props: Step3FormProps = {
    question: en.question2,
    options: options,
    prev: en.prev,
    next: en.next,
    value: '',
    prevStep: prevStep,
    nextStep: nextStep,
    onChange: () => {
      return
    },
    errorMessage: en.errorMessage3,
  }

  const setup = () => {
    const utils = render(<Step3Form {...props}/>)
    const radios = screen.getAllByTestId('input-service') as HTMLInputElement[]
    const prevButton = screen.getByTestId('button-prev') as HTMLInputElement
    const submit = screen.getByTestId('button-next') as HTMLInputElement
    return {
      radios,
      prevButton,
      submit,
      ...utils,
    }
  }

  it('renders', () => {
    const { asFragment } = setup()
    expect(asFragment()).toMatchSnapshot()
  })

  it('returns error if no option is selected', async () => {
    const { submit } = setup()
    fireEvent.click(submit)
    const error = await waitFor(() => screen.getByTestId('input-error'))
    expect(error.textContent).toBe(en.errorMessage3)
  })

  it('submits the form if email is valid', async () => {
    const { radios, rerender, submit } = setup()
    rerender(<Step3Form {...{ ...props, value: 'one' }} />)
    await waitFor(() => expect(radios[0].classList.contains('checked')).toEqual(true))
    fireEvent.click(submit)
    await waitFor(() => expect(nextStep).toHaveBeenCalledTimes(1))
  })

  it('goes to the previous step', async () => {
    const { prevButton } = setup()
    fireEvent.click(prevButton)
    await waitFor(() => expect(prevStep).toHaveBeenCalledTimes(1))
  })
})
