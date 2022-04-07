import { useEffect } from 'react'
import Modal from 'react-modal'

import * as S from './styles'

const defaultStyles = {
  content: {
    position: 'absolute',
    margin: 'auto auto',
    maxWidth: '400px',
    height: '580px',
    padding: '0 25px',

    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px'
  }
}

const BaseModal = (props) => {
  function closeModal() {
    props.setModalIsOpen(false)
  }

  useEffect(() => {
    Modal.setAppElement('body')
  }, [])

  const customStyles = {
    ...defaultStyles,
    content: {
      ...defaultStyles.content,
      ...props.customContent
    }
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={closeModal}
      contentLabel={props.contentLabel || 'Modal'}
      style={customStyles}
    >
      <S.ModalClose onClick={closeModal}>X</S.ModalClose>
      {props.children}
    </Modal>
  )
}

export default BaseModal
