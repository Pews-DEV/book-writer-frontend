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
              <S.ImgLabel htmlFor="img-updload">Custom Upload</S.ImgLabel>
              <S.ImgInput name="img-upload" type="file" />
              <S.Traco></S.Traco>
            </div>
            <S.Form>
              <S.Label htmlFor="titulo">Título</S.Label>
              <S.Input name="titulo" type="text" />
              <S.GroupContainer>
                <S.Group>
                  <S.Label htmlFor="categorias">Categoria</S.Label>
                  <S.Select name="categorias" id="categorias">
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                  </S.Select>
                </S.Group>
                <S.Group>
                  <S.Label htmlFor="nome">Nome Fantasia</S.Label>
                  <S.Input name="nome" type="text" />
                </S.Group>
              </S.GroupContainer>
              <S.Label htmlFor="sinopse">Sinopse</S.Label>
              <S.Textarea
                name="sinopse"
                id="sinopse"
                cols="30"
                rows="10"
              ></S.Textarea>
            </S.Form>
          </S.FormContainer>
        </MainContainer>
      </FullyContainer>
    </>
  )
}

export default NewBook
