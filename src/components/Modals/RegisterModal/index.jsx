import { SecondaryButton } from '@/components/Buttons'
import BaseModal from '@/components/Modals'

import * as S from './styles'

const RegisterModal = (props) => {
  return (
    <BaseModal
      modalIsOpen={props.modalIsOpen}
      setModalIsOpen={props.setModalIsOpen}
      contentLabel="Register Modal"
    >
      <S.ModalTitle>Junte-se Ao Book Write</S.ModalTitle>
      <S.ModalDescription>
        Faça parte da comunidade global de leitores e escritores, todos
        conectados através do poder das histórias.
      </S.ModalDescription>
      <form>
        <S.ModalLabel htmlFor="user">User Name</S.ModalLabel>
        <S.ModalInput name="user" type="text" />
        <S.ModalLabel htmlFor="email">E-mail</S.ModalLabel>
        <S.ModalInput name="email" type="text" />
        <S.ModalLabel htmlFor="password">Password</S.ModalLabel>
        <S.ModalInput name="password" type="text" />
        <S.ModalButtom>
          <SecondaryButton>Inscrever-se</SecondaryButton>
        </S.ModalButtom>
      </form>
    </BaseModal>
  )
}

export default RegisterModal
