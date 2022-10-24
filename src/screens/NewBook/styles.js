import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 1160px;
  display: flex;
  gap: var(--spacing-9);
  margin-top: var(--spacing-14);
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const GroupContainer = styled.div`
  display: flex;
  gap: var(--spacing-7);
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

export const Label = styled.label`
  font-size: var(--fontsize-medium);
  margin-bottom: var(--spacing-3);
`

export const Input = styled.input`
  height: 45px;
  margin-bottom: var(--spacing-5);
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid var(--gray-blue-200);
  border-radius: var(--spacing-1);
  box-shadow: 1px 1px 4px var(--gray-200);
`

export const Textarea = styled.textarea`
  height: 143px;
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid var(--gray-blue-200);
  border-radius: var(--spacing-1);
  box-shadow: 1px 1px 4px var(--gray-200);
`

export const Select = styled.select`
  height: 45px;
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid var(--gray-blue-200);
  border-radius: var(--spacing-1);
  box-shadow: 1px 1px 4px var(--gray-200);
`
