import { render } from '@testing-library/react'

import HomeScreen from '@/screens/home'

describe('<HomeScreen />', () => {
  it('tests if HomeScreen is rendering', () => {
    const { container } = render(<HomeScreen />)

    expect(container).toBeInTheDocument()
  })
})
