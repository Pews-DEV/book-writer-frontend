import { fireEvent, render, screen } from '@testing-library/react'
import LoginModal from './index'

const setIsOpen = jest.fn()

describe('Login modal testing', () => {
  it('should render the component', () => {
    render(<LoginModal modalIsOpen={true} setModalIsOpen={setIsOpen} />)

    expect(
      screen.getByText(
        'Divirta-se lendo e escrevendo livros, todos conectados através do poder das histórias.'
      )
    ).toBeInTheDocument()
  })

  it('should render inputs correctly', () => {
    render(<LoginModal modalIsOpen={true} />)

    const inputEmail = screen.getByTestId('input-validated-email')

    expect(inputEmail).toBeInTheDocument()
  })

  it('should render input password correctly', () => {
    render(<LoginModal modalIsOpen={true} />)

    const inputPassword = screen.getByTestId('input-validated-password')

    expect(inputPassword).toBeInTheDocument()
  })

  it('should open register modal when button is clicked', () => {
    render(<LoginModal modalIsOpen={true} setModalIsOpen={setIsOpen} />)

    const registerModalBeforeClick = screen.queryByTestId('register-modal')
    expect(registerModalBeforeClick).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Cadastre-se'))

    const registerModalAfterClick = screen.getByTestId('register-modal')
    expect(registerModalAfterClick).toBeInTheDocument()
  })
})
