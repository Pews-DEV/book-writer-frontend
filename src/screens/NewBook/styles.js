import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  gap: 30px;
`

export const ImgLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 228px;
  height: 350px;

  cursor: pointer;

  border-radius: 5px;
  background-color: var(--gray-200);
`

export const ImgInput = styled.input`
  display: none;
`
export const Label = styled.label`
  font-size: 18px;
`
export const Input = styled.input`
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`
