import Navbar from '@/components/Navbar'
import { MainContainer, FullyContainer } from '@/styles/Containers'

import * as S from './styles'

const NewBook = () => {
  return (
    <>
      <MainContainer>
        <Navbar />
      </MainContainer>
      <FullyContainer>
        <MainContainer>
          <S.FormContainer>
            <div>
              <S.ImgLabel>Custom Upload</S.ImgLabel>
              <S.ImgInput type="file" />
            </div>
            <div>
              <form>
                <S.Label htmlFor="">Título</S.Label>
                <S.Input type="text" />
                <div>
                  <S.Label htmlFor="">Categoria</S.Label>
                  <S.Input type="text" />
                  <S.Label htmlFor="">Nome Fantasia</S.Label>
                  <S.Input type="text" />
                </div>
                <S.Label htmlFor="">Sinopse</S.Label>
                <S.Input type="text-area" />
              </form>
            </div>
          </S.FormContainer>
        </MainContainer>
      </FullyContainer>
    </>
  )
}

export default NewBook
