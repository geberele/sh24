import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, waitFor, screen } from '@testing-library/dom'
import { Preview, PreviewProps, QandA } from './Preview.component'
import { en } from '../MultipleStepsForm/i18n/i18n'

describe('Preview', () => {
  const prevStep = jest.fn()

  const name = 'Mark'
  const email = 'test@example.com'
  const service = 'Other'
  const qandas: QandA[] = [
    { question: en.question1, answer: name },
    { question: en.question2, answer: email },
    { question: en.question3, answer: service },
  ]

  const props: PreviewProps = {
    title: en.previewTitle,
    prev: en.prev,
    qandas: qandas,
    prevStep: prevStep,
  }

  const setup = () => {
    const utils = render(<Preview {...props}/>)
    const prevButton = screen.getByTestId('button-prev') as HTMLInputElement
    return {
      prevButton,
      ...utils,
    }
  }

  it('renders', () => {
    const { asFragment } = setup()
    expect(asFragment()).toMatchSnapshot()
  })

  it('shows the correct answers', async () => {
    setup()
    expect(screen.getByText(name)).toBeInTheDocument()
    expect(screen.getByText(email)).toBeInTheDocument()
    expect(screen.getByText(service)).toBeInTheDocument()
  })

  it('goes to the previous step', async () => {
    const { prevButton } = setup()
    fireEvent.click(prevButton)
    await waitFor(() => expect(prevStep).toHaveBeenCalledTimes(1))
  })
})
