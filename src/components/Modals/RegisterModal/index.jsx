import React from 'react';
import Modal from 'react-modal';

import { SecondaryButton } from '@/components/Buttons'

import * as S from "./styles";

const customStyles = {
  content: {
    position: 'absolute',
    margin: 'auto auto',
    maxWidth: '400px',
    height: '580px',
    padding: '0 25px',

    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
  },
};

export default function RegisterModal(props) {
  function closeModal() {
    props.setModalIsOpen(false);
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Register Modal"
      style={customStyles}>
        <S.ModalClose onClick={closeModal}>X</S.ModalClose>
        <S.ModalTitle>
          Junte-se Ao Book Write
        </S.ModalTitle>
        <S.ModalDescription>
          Faça parte da comunidade global de leitores e
          escritores, todos conectados através do poder
          das histórias.
        </S.ModalDescription>
        <form>
            <S.ModalLabel htmlFor="user">User Name</S.ModalLabel>
            <S.ModalInput name="user" type="text" />
            <S.ModalLabel htmlFor="email">E-mail</S.ModalLabel>
            <S.ModalInput name="email" type="text" />
            <S.ModalLabel htmlFor="password">Password</S.ModalLabel>
            <S.ModalInput name="password" type="text" />
            <S.ModalButtom>
              <SecondaryButton>
                Inscrever-se
              </SecondaryButton>
            </S.ModalButtom>
        </form>
    </Modal>
  );
}
