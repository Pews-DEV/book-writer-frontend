import Image from 'next/image'

import { MainContainer, FullyContainer } from '@/styles/Containers'
import Navbar from '@/components/Navbar'

import ImgCapa from '@/assets/img/img-capa.png'
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
              <S.ImgLabel htmlFor="img-updload">
                <Image
                  src={ImgCapa.src}
                  alt="Imagem Capa"
                  width="64px"
                  height="64px"
                />
              </S.ImgLabel>
              <S.ImgInput name="img-upload" type="file" />
              <S.Traco></S.Traco>
            </div>
            <S.Form>
              <S.Label htmlFor="titulo">Título</S.Label>
              <S.Input
                name="titulo"
                type="text"
                placeholder="Digite o titulo do livro..."
              />
              <S.GroupContainer>
                <S.GroupSelect>
                  <S.Label htmlFor="categorias">Categoria</S.Label>
                  <S.Select name="categorias" id="categorias">
                    <option value="" disabled selected>
                      Categoria do livro...
                    </option>
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                  </S.Select>
                </S.GroupSelect>
                <S.GroupInput>
                  <S.Label htmlFor="nome">Nome Fantasia</S.Label>
                  <S.Input
                    name="nome"
                    type="text"
                    placeholder="Digite o nome fantasia..."
                  />
                </S.GroupInput>
              </S.GroupContainer>
              <S.Label htmlFor="sinopse">Sinopse</S.Label>
              <S.Textarea
                name="sinopse"
                id="sinopse"
                rows="10"
                placeholder="Digite a sinopse do livro......"
              ></S.Textarea>
            </S.Form>
          </S.FormContainer>
        </MainContainer>
      </FullyContainer>
    </>
  )
}

export default NewBook
