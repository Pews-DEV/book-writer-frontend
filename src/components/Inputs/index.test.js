import { fireEvent, render, screen } from '@testing-library/react'
import Input from './index'

describe('Input component tests', () => {
  it('should render input correctly', () => {
    render(<Input />)

    const input = screen.getByTestId('input-validated-test')

    expect(input).toBeInTheDocument()
  })

  it('should not render button show password', () => {
    render(<Input />)

    const button = screen.queryByTestId('show-password-button')

    expect(button).not.toBeInTheDocument()
  })

  it('should render button show password correctly', () => {
    render(<Input showButton />)

    const button = screen.getByTestId('show-password-button')

    expect(button).toBeInTheDocument()
  })

  it('checks if click in showPasswordButton will set input type to text', () => {
    render(<Input type="password" showButton />)

    const button = screen.getByTestId('show-password-button')

    fireEvent.click(button)

    const input = screen.getByTestId('input-validated-test')

    expect(input).toHaveAttribute('type', 'text')
  })

  it('checks if click in showPasswordButton twice will set input type to text and then password', () => {
    render(<Input type="password" showButton />)

    const button = screen.getByTestId('show-password-button')

    fireEvent.click(button)
    fireEvent.click(button)

    const input = screen.getByTestId('input-validated-test')

    expect(input).toHaveAttribute('type', 'password')
  })
})
