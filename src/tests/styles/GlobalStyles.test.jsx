import { render } from '@testing-library/react'

import GlobalStyles from '@/styles/globals'

describe('Testing GlobalStyles component', () => {
  it('should render correctly', () => {
    const { container } = render(<GlobalStyles />)

    expect(container).toBeInTheDocument()
  })
})
