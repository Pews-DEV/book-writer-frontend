import { render } from '@testing-library/react'

import Home from '@/pages/home'
import App from '@/pages/_app'

describe('<Home />', () => {
  it('tests if Home is rendering', () => {
    const { container } = render(<App Component={Home} />)

    expect(container).toBeInTheDocument()
  })
})
