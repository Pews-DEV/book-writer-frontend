import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;

  border: 1px solid var(--purple-100);
  border-radius: var(--spacing-1);

  margin-bottom: var(--spacing-5);
  padding-inline: var(--spacing-2);
  position: relative;
`

export const Image = styled.img`
  width: var(--spacing-5);

  cursor: pointer;

  position: absolute;
  top: var(--spacing-1);
  right: var(--spacing-4);
`
