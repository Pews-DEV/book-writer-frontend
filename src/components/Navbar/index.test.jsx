import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from '.'

describe('Testing Navbar component', () => {
  it('should render correctly', () => {
    render(<Navbar />)

    const container = screen.getByTestId('container')

    expect(container).toBeInTheDocument()
  })

  it('should logo image render correctly', () => {
    render(<Navbar />)

    const logo = screen.getByAltText('logo')

    expect(logo).toBeInTheDocument()
  })

  it('should menu "Iniciar Sessão" render correctly', () => {
    render(<Navbar />)

    const iniciarSessaoMenuItem = screen.getByText('Iniciar Sessão')

    expect(iniciarSessaoMenuItem).toBeInTheDocument()
  })

  it('should menu "Inscreva-se" render correctly', () => {
    render(<Navbar />)

    const inscrevaSeMenuItem = screen.getByTestId('inscreva-se')

    expect(inscrevaSeMenuItem).toBeInTheDocument()
  })

  it('should click in menu "Inscreva-se" and open register modal', () => {
    render(<Navbar />)

    const registerModalBeforeClick = screen.queryByTestId('register-modal')
    expect(registerModalBeforeClick).not.toBeInTheDocument()

    const inscrevaSeMenuItem = screen.getByTestId('inscreva-se__open-modal')
    fireEvent.click(inscrevaSeMenuItem)

    const registerModalAfterClick = screen.queryByTestId('register-modal')
    expect(registerModalAfterClick).toBeInTheDocument()
  })
})
