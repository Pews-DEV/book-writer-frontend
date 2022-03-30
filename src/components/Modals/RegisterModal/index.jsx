import React from 'react';
import Modal from 'react-modal';

import * as S from "./styles";

const customStyles = {
  content: {
    position: 'absolute',
    margin: '0 auto',
    width: '400px',
    height: '600px',

    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
  },
};

export default function RegisterModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}> Iniciar Sessão </button>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        contentLabel="Register Modal"
        style={customStyles}>
          <S.ModalHeader>
            Junte-se Ao Book Write
          </S.ModalHeader>
          <S.ModalDescription>
            Faz parte da comunidade global de leitores e
            escritores, todos conectados através poder
            das histórias.
          </S.ModalDescription>
          <S.ModalForm>
              <label htmlFor="user">User Name</label>
              <S.ModalInput name="user" type="text" />
              <label htmlFor="email">E-mail</label>
              <S.ModalInput name="email" type="text" />
              <label htmlFor="password">Password</label>
              <S.ModalInput name="password" type="text" />
          </S.ModalForm>
      </Modal>
    </div>
  );
}
