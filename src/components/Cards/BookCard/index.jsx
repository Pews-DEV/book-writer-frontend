import { useState } from 'react'
import BookCardProptypes from './proptypes'
import * as S from './styles'

const BookCard = (props) => {
  const [isLiked, setIsLiked] = useState(props.is_liked)

  return (
    <S.Container>
      <S.Image src={props.img_url} />
      <S.LineContainer>
        <S.Title>{props.title}</S.Title>
        <S.HeartIcon isLiked={isLiked} onClick={() => setIsLiked(!isLiked)}>
          ♥
        </S.HeartIcon>
      </S.LineContainer>
      <S.Text>
        Por <S.Author>{props.author}</S.Author>
      </S.Text>
    </S.Container>
  )
}

BookCard.propTypes = BookCardProptypes

export default BookCard
