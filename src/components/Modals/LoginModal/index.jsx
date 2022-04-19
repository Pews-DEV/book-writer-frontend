import { useState } from 'react'

import BaseModal from '../index'
import Logo from '@/assets/img/logo.png'
import Input from '@/components/Inputs/index'
import RegisterModal from '../RegisterModal'

import {
  ModalBody,
  ModalLogo,
  ModalDescription,
  ModalLabel,
  ModalButtom,
  ModalOptions,
  ModalText,
  ModalLink
} from '../styles'

const LoginModal = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const customModalContent = {
    height: '620px'
  }

  const handleRegisterModal = () => {
    setIsOpen(true)
  }

  return (
    <BaseModal
      modalIsOpen={props.modalIsOpen}
      setModalIsOpen={props.setModalIsOpen}
      contentLabel="Login Modal"
      customContent={customModalContent}
    >
      <ModalBody data-testid="login-modal">
        <ModalLogo src={Logo.src} alt="Logo Book Write" />

        <ModalDescription>
          Divirta-se lendo e escrevendo livros, todos conectados através do
          poder das histórias.
        </ModalDescription>

        <form>
          <ModalLabel htmlFor="email">Email / Usuário </ModalLabel>
          <Input name="email" type="text" />
          <ModalLabel htmlFor="password">Senha</ModalLabel>
          <Input name="password" type="password" showButton />

          <ModalButtom type="submit">Entrar</ModalButtom>
        </form>

        <ModalOptions>
          <ModalLink>Esqueceu a senha?</ModalLink>
          <ModalText>
            Não tem uma conta?{' '}
            <ModalLink onClick={handleRegisterModal}>Cadastre-se</ModalLink>
            <RegisterModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen} />
          </ModalText>
        </ModalOptions>
      </ModalBody>
    </BaseModal>
  )
}

export default LoginModal
