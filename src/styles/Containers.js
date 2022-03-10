import { devices } from '@/utils/devices'
import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  
  max-width: 1280px;
  padding: 0 48px;
  margin: 0 auto;
`

export const FullyContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100vh - 70px);

  ${(props) => (
    props.backgroundImage ? `background-image: url(${props.backgroundImage});` : ''
  )}

  background-repeat: no-repeat;
  background-position: right top;
  
  @media ${devices.mobileXXL} {
    display: block;
  }
`
