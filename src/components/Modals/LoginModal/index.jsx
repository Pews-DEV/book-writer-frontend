import React from 'react'
import BaseModal from '../index'
import * as S from '../styles'

const LoginModal = (props) => {
  const customModalContent = {
    height: '620px'
  }

  return (
    <BaseModal
      modalIsOpen={props.modalIsOpen}
      setModalIsOpen={props.setModalIsOpen}
      contentLabel="Login Modal"
      customContent={customModalContent}
    >
      <S.ModalBody>
        <S.ModalDescription>
          Divirta-se lendo e escrevendo livros, todos conectados através poder
          das histórias.
        </S.ModalDescription>

        <S.ModalLabel htmlFor="email">Email / Usuário </S.ModalLabel>
        <S.ModalInput name="email" type="text" required />
        <S.ModalLabel htmlFor="password">Senha</S.ModalLabel>
        <S.ModalInput name="password" type="password" required />
        <S.ModalButtom type="submit">Entrar</S.ModalButtom>
        <S.ModalOptions>
          {/* OBS: ADICIONAR FEATURE DE RECUPERAÇÃO DE SENHA */}
          <S.ModalLink>Esqueceu a senha?</S.ModalLink>
          <S.ModalText>
            Não tem uma conta?<S.ModalLink> Cadastre-se</S.ModalLink>
          </S.ModalText>
        </S.ModalOptions>
      </S.ModalBody>
    </BaseModal>
  )
}

export default LoginModal
