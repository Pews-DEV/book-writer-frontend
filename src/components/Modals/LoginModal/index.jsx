import { useState } from 'react'

import BaseModal from '../index'
import Logo from '@/assets/img/logo.png'
import RegisterModal from '../RegisterModal'

import {
  ModalBody,
  ModalLogo,
  ModalDescription,
  ModalLabel,
  ModalInput,
  ModalButtom,
  ModalOptions,
  ModalText,
  ModalLink
} from '../styles'

const LoginModal = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const testId = 'input-validated'

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
      <ModalBody>
        <ModalLogo src={Logo.src} alt="Logo Book Write" />

        <ModalDescription>
          Divirta-se lendo e escrevendo livros, todos conectados através do
          poder das histórias.
        </ModalDescription>

        <form>
          <ModalLabel htmlFor="email">Email / Usuário </ModalLabel>
          <ModalInput
            name="email"
            type="text"
            data-testid={`${testId}-email`}
            required
          />
          <ModalLabel htmlFor="password">Senha</ModalLabel>
          <ModalInput
            name="password"
            type="password"
            data-testid={`${testId}-password`}
            required
          />

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
