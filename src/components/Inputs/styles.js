import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;

  border: 1px solid var(--purple-100);
  border-radius: 4px;

  margin-bottom: var(--spacing-5);
  padding-inline: var(--spacing-2);
  position: relative;
`

export const Image = styled.img`
  width: 24px;

  cursor: pointer;

  position: absolute;
  top: 4px;
  right: 16px;
`
