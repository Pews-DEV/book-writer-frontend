import * as S from '../styles'

import BaseModal from '@/components/Modals'
import Input from '@/components/Inputs/index'

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
          <Input name="username" type="text" />
          <S.ModalLabel htmlFor="email">E-mail</S.ModalLabel>
          <Input name="email" type="text" />
          <S.ModalLabel htmlFor="password">Senha</S.ModalLabel>
          <Input name="password" type="password" />
          <S.ModalLabel htmlFor="confirm_password">
            Confirmar Senha
          </S.ModalLabel>
          <Input name="confirm_password" type="password" />
          <S.ModalButtom type="submit">Inscrever-se</S.ModalButtom>
        </form>
      </S.ModalBody>
    </BaseModal>
  )
}

export default RegisterModal
