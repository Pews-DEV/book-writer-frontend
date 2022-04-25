import Proptypes from 'prop-types'

const BaseModalProps = {
  contentLabel: Proptypes.string.isRequired,
  setModalIsOpen: Proptypes.func.isRequired,
  modalIsOpen: Proptypes.bool.isRequired,
  children: Proptypes.element.isRequired,
  customContent: Proptypes.object
}

export default BaseModalProps
