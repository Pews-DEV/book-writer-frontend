import { render, screen } from '@testing-library/react'

import { FullyContainer } from '@/styles/Containers'

describe('Testing FullyContainer component', () => {
  it('should render correctly', () => {
    const { container } = render(<FullyContainer />)

    expect(container).toBeInTheDocument()
  })

  it('should set backgroundImage as passed', () => {
    const mockedBackgroundImage = '/foo'
    const expectedBackgroundImage = `background-image: url('${mockedBackgroundImage}');`

    render(
      <FullyContainer
        data-testid="container"
        backgroundImage={mockedBackgroundImage}
      />
    )

    const container = screen.getByTestId('container')

    expect(container).toHaveStyle(expectedBackgroundImage)
  })
})
