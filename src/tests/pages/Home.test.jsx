import { render } from '@testing-library/react'

import Home from '@/pages/home'

describe('<Home />', () => {
  it('tests if Home is rendering', () => {
    const { container } = render(<Home />)

    expect(container).toBeInTheDocument()
  })
})
