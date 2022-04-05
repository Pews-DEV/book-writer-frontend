import { PrimaryButton } from '@/components/Buttons'

import * as S from './styles'

export default function Hero() {
  return (
    <S.HeroContent>
      <S.Title>Olá, somos o Book Write.</S.Title>
      <S.Subtitle>A plataforma de histórias mais amada do mundo</S.Subtitle>
      <S.Description>
        O Book Write conecta uma comunidade global de 90 milhões de leitores e
        escritores através do poder das histórias.
      </S.Description>
      <S.ButtonSection>
        <PrimaryButton>Iniciar leitura</PrimaryButton>
        <PrimaryButton>Começar a escrever</PrimaryButton>
      </S.ButtonSection>
    </S.HeroContent>
  )
}
