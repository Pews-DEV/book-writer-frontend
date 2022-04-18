import { useState } from 'react'
import * as S from './styles'
import Eye from '@/assets/img/eye.png'
import CloseEye from '@/assets/img/close-eye(TEMPORARY).png'

const Input = ({ name, type }) => {
  const [typeInput, setTypeInput] = useState(type)

  const validatePassword = typeInput === 'password'

  return (
    <S.Wrapper>
      <S.Input name={name} type={typeInput} required />
      {validatePassword && (
        <S.Image
          src={validatePassword ? Eye.src : CloseEye.src}
          alt="Mostrar senha"
          onClick={() =>
            validatePassword ? setTypeInput('text') : setTypeInput('password')
          }
        />
      )}
    </S.Wrapper>
  )
}

export default Input
