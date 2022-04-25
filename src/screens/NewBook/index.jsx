import { MainContainer } from '@/styles/Containers'
import Navbar from '@/components/Navbar'

import * as S from './styles'
import ImageInput from '@/components/ImageInput'

const NewBookScreen = () => {
  const testId = 'input-validated'
  return (
    <>
      <MainContainer>
        <Navbar />
        <S.FormContainer>
          <ImageInput testid={`${testId}-image`} />
          <S.Form>
            <S.Label htmlFor="titulo">Título</S.Label>
            <S.Input
              name="titulo"
              type="text"
              placeholder="Digite o titulo do livro..."
              data-testid={`${testId}-titulo`}
            />
            <S.GroupContainer>
              <S.GroupSelect>
                <S.Label htmlFor="categorias">Categoria</S.Label>
                <S.Select
                  name="categorias"
                  defaultValue={'DEFAULT'}
                  data-testid={`${testId}-select`}
                >
                  <option value="DEFAULT" disabled>
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
                  data-testid={`${testId}-nome`}
                />
              </S.GroupInput>
            </S.GroupContainer>
            <S.Label htmlFor="sinopse">Sinopse</S.Label>
            <S.Textarea
              name="sinopse"
              id="sinopse"
              rows="10"
              placeholder="Digite a sinopse do livro......"
              data-testid={`${testId}-sinopse`}
            ></S.Textarea>
          </S.Form>
        </S.FormContainer>
      </MainContainer>
    </>
  )
}

export default NewBookScreen
