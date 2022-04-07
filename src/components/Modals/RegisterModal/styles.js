import styled from 'styled-components'

import { SecondaryButton } from '@/components/Buttons'
import { devices } from '@/utils/devices'

export const ModalBody = styled.div`
  max-width: 320px;
  width: 100%;

  margin-inline: auto;
`

export const ModalTitle = styled.title`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: var(--spacing-3) 0;
  margin-top: 20px;

  font-size: var(--fontsize-medium);

  @media ${devices.mobileL} {
    font-size: var(--fontsize-extralarge);
  }
`

export const ModalDescription = styled.p`
  max-width: 283px;

  padding: var(--spacing-3) 0;
  margin: 0 auto var(--spacing-5) auto;

  text-align: center;
  font-size: var(--fontsize-extrasmall);

  @media ${devices.mobileL} {
    font-size: var(--fontsize-small);
  }
`

export const ModalInput = styled.input`
  width: 100%;
  height: 32px;

  border: 1px solid var(--purple-100);
  border-radius: var(--spacing-1);

  margin-bottom: var(--spacing-5);
  padding-inline: var(--spacing-2);
`

export const ModalLabel = styled.label`
  font-size: var(--fontsize-medium);
`

export const ModalButtom = styled(SecondaryButton)`
  width: 100%;

  margin-inline: auto;
  margin-top: var(--spacing-2);
`
