import { screen, render, fireEvent } from '@testing-library/react'
import BaseModal from '@/components/Modals'

const setModalIsOpen = jest.fn()
const useStateCustom = jest.fn()
useStateCustom.mockImplementation((init) => [init, useStateCustom])

describe('Testing BaseModal component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <BaseModal modalIsOpen={true} setModalIsOpen={setModalIsOpen} />
    )

    expect(container).toBeInTheDocument()
  })

  it('should not render if modalIsOpen is true', () => {
    render(<BaseModal modalIsOpen={false} setModalIsOpen={setModalIsOpen} />)

    const modalClose = screen.queryByText('X')
    expect(modalClose).not.toBeInTheDocument()
  })

  it('should render modalClose correctly', () => {
    render(<BaseModal modalIsOpen={true} setModalIsOpen={setModalIsOpen} />)

    const modalClose = screen.getByText('X')

    expect(modalClose).toBeInTheDocument()
  })

  it('should close modal when modalClose is clicked', () => {
    const [modalIsOpen, setModalIsOpen] = useStateCustom(true)

    render(
      <BaseModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    )

    const modalClose = screen.getByText('X')
    fireEvent.click(modalClose)

    expect(setModalIsOpen).toHaveBeenCalledTimes(2)
  })
})
