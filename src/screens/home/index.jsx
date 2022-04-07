import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { MainContainer, FullyContainer } from '@/styles/Containers'

import HeroBackground from '@/assets/img/hero-background.png'

const HomeScreen = () => (
  <>
    <MainContainer>
      <Navbar />
    </MainContainer>
    <FullyContainer backgroundImage={HeroBackground.src}>
      <MainContainer>
        <Hero />
      </MainContainer>
    </FullyContainer>
  </>
)

export default HomeScreen
