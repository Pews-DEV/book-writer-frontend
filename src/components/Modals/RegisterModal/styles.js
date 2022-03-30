import styled from 'styled-components'

export const ModalTitle = styled.title`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: var(--spacing-3) 0;
  margin-top: 20px;

  font-size: var(--fontsize-extralarge);
`

export const ModalDescription = styled.p`
  max-width: 283px;

  padding: var(--spacing-3) 0;
  margin: 0 auto var(--spacing-5) auto;

  text-align: center;
  font-size: var(--fontsize-small);
`

export const ModalInput = styled.input`
  width: 100%;
  height: 32px;
  left: 480px;
  top: 256px;

  border: 1px solid var(--purple-100);
  box-sizing: border-box;
  border-radius: var(--spacing-1);

  margin-bottom: var(--spacing-5);
`

export const ModalLabel = styled.label`
  font-size: var(--fontsize-medium);
`

export const ModalButtom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: var(--spacing-4);
`
