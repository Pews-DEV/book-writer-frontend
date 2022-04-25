import { render, screen } from '@testing-library/react'

import { MainContainer } from '@/styles/Containers'

describe('Testing MainContainer component', () => {
  it('should render correctly', () => {
    render(<MainContainer data-testid="container" />)

    const container = screen.getByTestId('container')

    expect(container).toBeInTheDocument()
  })
})
