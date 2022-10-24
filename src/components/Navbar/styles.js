import { devices } from '@/utils/devices'
import styled from 'styled-components'

export const NavContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-3);

  padding: var(--spacing-3) 0;

  @media ${devices.mobileXL} {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  margin-bottom: var(--spacing-3);

  transition: filter 0.2s;

  @media ${devices.mobileXL} {
    gap: 30px;
    flex-direction: row;
    margin-bottom: 0;
  }

  @media ${devices.laptop} {
    gap: 45px;
  }
`

export const MenuItem = styled.li`
  transition: filter 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
