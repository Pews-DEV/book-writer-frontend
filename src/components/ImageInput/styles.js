import styled from 'styled-components'

export const ImgLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 228px;
  height: 350px;

  cursor: pointer;

  border-radius: var(--spacing-1);
  background-color: var(--gray-200);
`

export const ImgInput = styled.input`
  display: none;
`

export const Imagem = styled.img`
  width: 64px;
  height: 64px;
`

export const PurpleBar = styled.hr`
  content: '';
  background-color: var(--purple-100);
  width: 143px;
  height: 10px;
  margin-top: var(--spacing-5);
`
