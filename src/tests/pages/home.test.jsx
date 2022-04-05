import { render } from '@testing-library/react'

import Home from '@/pages/home'

describe('<Home />', () => {
  it('tests if Home is rendering', () => {
    const { container } = render(<Home />)

    expect(container).toBeInTheDocument()
  })

  it('test if two plus two equals a four', () => {
    expect(2 + 2).toBe(4)
  })
})
