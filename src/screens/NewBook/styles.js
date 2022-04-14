import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 1160px;
  display: flex;
  gap: 58px;
  margin-top: 95px;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const GroupContainer = styled.div`
  display: flex;
  gap: 42px;
`

export const GroupSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 334px;
`

export const GroupInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 498px;
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
  margin-bottom: 12px;
`

export const Input = styled.input`
  height: 45px;
  margin-bottom: 24px;
  padding: 11px 17px;
  border: 1px solid var(--gray-blue-200);
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`

export const Textarea = styled.textarea`
  height: 143px;
  padding: 11px 17px;
  border: 1px solid var(--gray-blue-200);
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`

export const Select = styled.select`
  height: 45px;
  padding: 11px 17px;
  border: 1px solid var(--gray-blue-200);
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`

export const Traco = styled.div`
  content: '';
  background-color: var(--purple-100);
  width: 143px;
  height: 10px;
  margin-top: 40px;
`
