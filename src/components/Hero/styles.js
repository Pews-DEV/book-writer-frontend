import { devices } from '@/utils/devices'
import styled from 'styled-components'

export const HeroContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

  max-width: 688px;

  padding-top: var(--spacing-8);

  @media ${devices.mobileXL} {
    padding-top: var(--spacing-15);
  }

  @media ${devices.laptop} {
    padding-top: var(--spacing-18);
  }
`

export const Title = styled.h1`
  max-width: 435px;

  font-size: var(--fontsize-giant);
  color: var(--purple-600);

  margin-bottom: var(--spacing-5);

  @media ${devices.mobileXL} {
    font-size: var(--fontsize-massive);
  }

  @media ${devices.laptop} {
    line-height: 80px;
    color: var(--purple-100);
  }
`

export const Subtitle = styled.sub`
  font-size: var(--fontsize-large);
  font-weight: var(--fw-regular);
  line-height: 28px;
  text-align: left;

  margin-bottom: var(--spacing-5);
`
export const Description = styled.p`
  font-size: var(--fontsize-large);
  font-weight: var(--fw-regular);
  color: var(--purple-700);
  line-height: 28px;
  text-align: left;

  margin-bottom: var(--spacing-6);

  @media ${devices.laptop} {
    color: var(--gray-700);
  }
`

export const ButtonSection = styled.div`
  max-width: 510px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-3);

  button {
    min-width: 230px;
  }
`
