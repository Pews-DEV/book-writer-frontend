import { render, screen } from '@testing-library/react'
import NewBookScreen from './index'

describe('NewBook page testing', () => {
  it('should render input image correctly', () => {
    render(<NewBookScreen />)
    const imageInput = screen.getByTestId('input-validated-image')
    expect(imageInput).toBeInTheDocument()
  })

  it('should render input titulo correctly', () => {
    render(<NewBookScreen />)
    const tituloInput = screen.getByTestId('input-validated-titulo')
    expect(tituloInput).toBeInTheDocument()
  })

  it('should render input select correctly', () => {
    render(<NewBookScreen />)
    const selectInput = screen.getByTestId('input-validated-select')
    expect(selectInput).toBeInTheDocument()
  })

  it('should render input nome correctly', () => {
    render(<NewBookScreen />)
    const nomeInput = screen.getByTestId('input-validated-nome')
    expect(nomeInput).toBeInTheDocument()
  })

  it('should render input sinopse correctly', () => {
    render(<NewBookScreen />)
    const sinopseInput = screen.getByTestId('input-validated-sinopse')
    expect(sinopseInput).toBeInTheDocument()
  })
})
