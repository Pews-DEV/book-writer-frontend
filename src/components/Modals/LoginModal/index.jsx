import React, { useState } from 'react'
import BaseModal from '../index'
import Logo from '@/assets/img/logo.png'
import * as S from '../styles'
import RegisterModal from '../RegisterModal'

const LoginModal = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const testId = 'input-validated'

  const customModalContent = {
    height: '620px'
  }

  const handleRegisterModal = () => {
    setIsOpen(true)
    props.setModalIsOpen(false)
  }

  return (
    <BaseModal
      modalIsOpen={props.modalIsOpen}
      setModalIsOpen={props.setModalIsOpen}
      contentLabel="Login Modal"
      customContent={customModalContent}
    >
      <S.ModalBody>
        {/* OBS: Imagem temporária, usei essa já que já estava sendo usada */}
        <S.ModalLogo src={Logo.src} alt="Logo Book Write" />

        <S.ModalDescription>
          Divirta-se lendo e escrevendo livros, todos conectados através do
          poder das histórias.
        </S.ModalDescription>

        <form>
          <S.ModalLabel htmlFor="email">Email / Usuário </S.ModalLabel>
          <S.ModalInput
            name="email"
            type="text"
            data-testid={`${testId}-email`}
            required
          />
          <S.ModalLabel htmlFor="password">Senha</S.ModalLabel>
          <S.ModalInput
            name="password"
            type="password"
            data-testid={`${testId}-password`}
            required
          />

          <S.ModalButtom type="submit">Entrar</S.ModalButtom>
        </form>

        <S.ModalOptions>
          {/* OBS: ADICIONAR FEATURE DE RECUPERAÇÃO DE SENHA */}
          <S.ModalLink>Esqueceu a senha?</S.ModalLink>
          <S.ModalText>
            Não tem uma conta?
            <S.ModalLink onClick={handleRegisterModal}>
              {' '}
              Cadastre-se
            </S.ModalLink>
            <RegisterModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen} />
          </S.ModalText>
        </S.ModalOptions>
      </S.ModalBody>
    </BaseModal>
  )
}

export default LoginModal
