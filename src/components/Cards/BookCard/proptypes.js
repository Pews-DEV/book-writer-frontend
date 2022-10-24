import Proptypes from 'prop-types'

const BookCardProptypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  img_url: Proptypes.string.isRequired,
  is_liked: Proptypes.bool.isRequired
}

export default BookCardProptypes
