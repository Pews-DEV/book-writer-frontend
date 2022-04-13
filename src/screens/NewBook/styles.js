import styled from 'styled-components'

export const FormContainer = styled.div`
  height: 400px;
  width: 1160px;
  display: flex;
  gap: 30px;
  margin-top: 50px;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const GroupContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  margin-bottom: 20px;
  border: 1px solid var(--gray-blue-200);
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`

export const Textarea = styled.textarea`
  margin-bottom: 20px;
  border: 1px solid var(--gray-blue-200);
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`

export const Select = styled.select`
  height: 30px;
  border: 1px solid var(--gray-blue-200);
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`

export const Traco = styled.div`
  content: '';
  background-color: var(--purple-100);
  width: 150px;
  height: 10px;
  margin-top: 20px;
`
