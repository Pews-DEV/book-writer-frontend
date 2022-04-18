import { useState } from 'react'

import { Image } from '@/styles/Image'

import * as S from './styles'

import Logo from '@/assets/img/logo.png'
import RegisterModal from '../Modals/RegisterModal'
import LoginModal from '../Modals/LoginModal'

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)

  const handleOpenLoginModal = () => {
    setModalLoginIsOpen(true)
  }

  const handleOpenRegisterModal = () => {
    setModalIsOpen(true)
  }

  return (
    <S.NavContainer>
      <div>
        <Image src={Logo.src} alt="logo" height="44px" />
      </div>
      <S.Menu>
        <S.MenuItem>
          <button onClick={handleOpenLoginModal}>Iniciar Sessão</button>
          <LoginModal
            setModalIsOpen={setModalLoginIsOpen}
            modalIsOpen={modalLoginIsOpen}
          />
        </S.MenuItem>
        <S.MenuItem>
          <button onClick={handleOpenRegisterModal}> Inscreva-se </button>
          <RegisterModal
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
          />
        </S.MenuItem>
      </S.Menu>
    </S.NavContainer>
  )
}

export default Navbar
