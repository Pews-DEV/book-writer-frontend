import { useState } from 'react'
import * as S from './styles'
import Eye from '@/assets/img/eye.png'
import CloseEye from '@/assets/img/close-eye(TEMPORARY).png'

const Input = (props) => {
  const { name, type, showButton = false } = props
  const [typeInput, setTypeInput] = useState(type)
  const validatePassword = typeInput === 'password'

  return (
    <S.Wrapper data-testid={`input-validated-${name}`}>
      <S.Input name={name} type={typeInput} required />
      {showButton && (
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
