import React from 'react'
import BaseModal from '../index'

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
      <h1>
        Divirta-se lendo e escrevendo livros, todos conectados através poder das
        histórias.
      </h1>

      <label htmlFor="email">Email / Usuário </label>
      <input />
      <label htmlFor="password">Senha</label>
      <button></button>
      <p>Esqueceu a senha?</p>
      <p>Não tem uma conta? Cadastre-se</p>
    </BaseModal>
  )
}

export default LoginModal
