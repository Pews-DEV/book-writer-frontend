import BaseModal from '@/components/Modals'
import RegisterModalProps from './proptypes'

import * as S from '../styles'

const RegisterModal = (props) => {
  const customModalContent = {
    height: '620px'
  }

  return (
    <BaseModal
      modalIsOpen={props.modalIsOpen}
      setModalIsOpen={props.setModalIsOpen}
      contentLabel="Register Modal"
      customContent={customModalContent}
    >
      <S.ModalBody data-testid="register-modal">
        <S.ModalTitle>Junte-se Ao Book Write</S.ModalTitle>
        <S.ModalDescription>
          Faça parte da comunidade global de leitores e escritores, todos
          conectados através do poder das histórias.
        </S.ModalDescription>
        <form>
          <S.ModalLabel htmlFor="username">Username</S.ModalLabel>
          <S.ModalInput name="username" type="text" required />
          <S.ModalLabel htmlFor="email">E-mail</S.ModalLabel>
          <S.ModalInput name="email" type="text" required />
          <S.ModalLabel htmlFor="password">Senha</S.ModalLabel>
          <S.ModalInput name="password" type="password" required />
          <S.ModalLabel htmlFor="confirm_password">
            Confirmar Senha
          </S.ModalLabel>
          <S.ModalInput name="confirm_password" type="password" />
          <S.ModalButtom type="submit">Inscrever-se</S.ModalButtom>
        </form>
      </S.ModalBody>
    </BaseModal>
  )
}

RegisterModal.prototype = RegisterModalProps

export default RegisterModal
