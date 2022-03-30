import { devices } from '@/utils/devices'
import styled from 'styled-components'

export const ModalHeader = styled.header`
width: 100%;

display: flex;
justify-content: center;
align-items: center;

padding: var(--spacing-3) 0;

font-size: var(--fontsize-extralarge);
`

export const ModalDescription = styled.header`
max-width: 283px;

padding: var(--spacing-3) 0;
margin: 0 auto;

text-align: center;
font-size: var(--fontsize-small);
`
export const ModalForm = styled.form`
display: flex;
flex-direction: column;
flex-grow: 2;
`
export const ModalInput = styled.input`
width: 100%;
height: 32px;
left: 480px;
top: 256px;

border: 1px solid #790AE9;
box-sizing: border-box;
border-radius: 5px;

margin-bottom: 20px
`
