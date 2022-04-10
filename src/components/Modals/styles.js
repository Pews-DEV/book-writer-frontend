import styled from 'styled-components'
import { SecondaryButton } from '@/components/Buttons'
import { devices } from '@/utils/devices'

// We are not able to style react-modal with styled-components
// that's why we are doing like that
// it's not recommended do the same with other styles
export const defaultModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.30)'
  },

  content: {
    position: 'absolute',
    margin: 'auto',
    maxWidth: '400px',
    height: '580px',
    padding: '0 var(--spacing-5)',

    background: 'var(--white)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 'var(--spacing-2)'
  }
}

export const ModalClose = styled.button`
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-3);
`

export const ModalBody = styled.section`
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
// Login modal
export const ModalOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: var(--spacing-5);
`

export const ModalLink = styled.a`
  color: var(--purple-100);
  font-size: var(--fontsize-small);
`

export const ModalText = styled.p`
  font-size: var(--fontsize-small);
`
