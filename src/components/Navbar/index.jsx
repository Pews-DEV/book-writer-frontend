import { useState } from 'react'

import { Image } from '@/styles/Image'
import RegisterModal from '@/components/Modals/RegisterModal'

import Logo from '@/assets/img/logo.png'
import * as S from './styles'

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleOpenRegisterModal() {
    setModalIsOpen(true)
  }

  return (
    <S.NavContainer data-testid="container">
      <div>
        <Image src={Logo.src} alt="logo" height="44px" />
      </div>
      <S.Menu>
        <S.MenuItem>Iniciar Sessão</S.MenuItem>
        <S.MenuItem data-testid="inscreva-se">
          <button
            onClick={handleOpenRegisterModal}
            data-testid="inscreva-se__open-modal"
          >
            Inscreva-se
          </button>
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
