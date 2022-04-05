import { useState } from 'react'

import { Image } from '@/styles/Image'

import * as S from './styles'

import Logo from '@/assets/img/logo.png'
import RegisterModal from '../Modals/RegisterModal'

export default function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleOpenRegisterModal() {
    setModalIsOpen(true)
  }

  return (
    <S.NavContainer>
      <div>
        <Image src={Logo.src} alt="logo" height="44px" />
      </div>
      <S.Menu>
        <S.MenuItem> Iniciar Sessão </S.MenuItem>
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
