import { Image } from "@/styles/Image"

import * as S from "./styles"

import Logo from '@/assets/img/logo.png'

export default function Navbar() {
  return (
    <S.NavContainer>
      <div> 
        <Image src={Logo.src} alt="logo" height="44px" />
      </div>
      <S.Menu>
        <S.MenuItem><a href="#"> Iniciar Sessão </a></S.MenuItem>
        <S.MenuItem><a href="#"> Inscrever-se </a></S.MenuItem>
      </S.Menu>
    </S.NavContainer>
  )  
}
