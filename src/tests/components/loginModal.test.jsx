import { render, screen, waitFor } from '@testing-library/react'
import LoginModal from '@/components/Modals/LoginModal'

describe('Login modal testing', () => {
  // it('should render the component', () => {
  //   render(<LoginModal />)

  //   expect(
  //     screen.getByText(
  //       'Divirta-se lendo e escrevendo livros, todos conectados através do poder das histórias.'
  //     )
  //   ).toBeInTheDocument()
  // })

  it('should render inputs correctly', () => {
    render(<LoginModal />)

    const testId = 'input-validated'

    waitFor(() =>
      expect(screen.queryByTestId(`${testId}-email`)).toBeInTheDocument()
    )
    waitFor(() =>
      expect(screen.queryByTestId(`${testId}-password`)).toBeInTheDocument()
    )
  })
})
