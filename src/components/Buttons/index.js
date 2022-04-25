import { devices } from '@/utils/devices'
import styled from 'styled-components'

export const BaseButton = styled.button`
  font-size: var(--fontsize-large);
  font-weight: var(--fw-regular);
  line-height: var(--lineheight--1);
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 60px;
  width: 100%;
  margin-bottom: var(--spacing);

  transition: filter 0.2s;

  border-radius: 5px;

  padding: 0 var(--spacing-4);

  &:hover {
    filter: brightness(0.9);
  }

  @media ${devices.mobileXXL} {
    width: initial;
    min-height: 50px;
  }
`

export const PrimaryButton = styled(BaseButton)`
  color: var(--white);
  background-color: var(--purple-600);

  @media ${devices.tabletM} {
    background-color: var(--purple-100);
  }
`

export const SecondaryButton = styled(BaseButton)`
  background-color: var(--black);
  color: var(--white);
  border-radius: 49px;
  padding: 0 16px;
`
