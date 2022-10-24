import PropTypes from "prop-types"

import * as S from "./styles"

const ProfileButton = (props) => {
  return (
    <S.Container>
      <S.PhotoContainer>
        <S.Photo
          src={props.imgUrl}
          alt="user-photo"
        />
      </S.PhotoContainer>
      <S.Name>{props.name}</S.Name>
      <S.Name>{props.name}</S.Name>
    </S.Container>
  )
}

// ProfileButton.propTypes = {
//   imgUrl: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired
// }

export default ProfileButton
