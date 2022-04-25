import styled from 'styled-components'

import { devices } from '@/utils/devices'
import ContainerProps from './PropTypes/Containers.Proptypes'

export const MainContainer = styled.section`
  width: 100%;

  max-width: 1280px;
  padding: 0 48px;
  margin: 0 auto;
`

export const FullyContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - 70px);

  ${(props) =>
    props.backgroundImage && `background-image: url(${props.backgroundImage});`}

  background-repeat: no-repeat;
  background-position: right top;

  @media ${devices.mobileXXL} {
    display: block;
  }
`

FullyContainer.propTypes = ContainerProps
