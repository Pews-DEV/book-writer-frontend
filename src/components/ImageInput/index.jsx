import ImgCapa from '@/assets/img/img-capa.png'
import * as S from './styles'

const ImageInput = (props) => {
  return (
    <div data-testid={props.testid || 'foo'}>
      <S.ImgLabel htmlFor="imgUpload">
        <S.Imagem src={ImgCapa.src} alt="Selecione uma imagem" />
      </S.ImgLabel>

      <S.ImgInput id="imgUpload" type="file" />
      <S.PurpleBar></S.PurpleBar>
    </div>
  )
}

export default ImageInput
