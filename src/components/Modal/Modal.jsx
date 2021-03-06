import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import { InlineLoading, Modal as DefaultModal } from 'carbon-components-react'

import './Modal.scss'

const Modal = ({
  title,
  isOpen,
  children,
  className,
  isDisabled,
  isSubmitting,
  isScrollable,
  handleCloseModal,
  primaryButtonText,
  handlePrimaryClick,
  secondaryButtonText,
  handleSecondaryClick,
  handleCloseModalComplete,
  ...props
}) => {
  const onCloseModal = async () => {
    if (!handleCloseModal) {
      return
    }

    await handleCloseModal()

    if (handleCloseModalComplete) {
      setTimeout(() => {
        handleCloseModalComplete()
      }, 300)
    }
  }

  return (
    <DefaultModal
      hasForm
      open={isOpen}
      modalHeading={title}
      onRequestClose={onCloseModal}
      aria-label={`${title} Modal`}
      hasScrollingContent={isScrollable}
      onRequestSubmit={handlePrimaryClick}
      onSecondarySubmit={handleSecondaryClick}
      secondaryButtonText={secondaryButtonText}
      primaryButtonText={isSubmitting ? <InlineLoading /> : primaryButtonText}
      {...props}
      className={cn(
        'Modal',
        {
          'Modal--disabled': isDisabled,
          'Modal--submitting': isSubmitting,
          'Modal--unclosable': !handleCloseModal
        },
        className
      )}>
      {children}
    </DefaultModal>
  )
}

Modal.defaultProps = {
  primaryButtonText: 'Submit',
  secondaryButtonText: 'Clear',
  preventCloseOnClickOutside: true
}

Modal.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  hasForm: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  isScrollable: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  handlePrimaryClick: PropTypes.func.isRequired,
  handleSecondaryClick: PropTypes.func.isRequired,
  handleCloseModalComplete: PropTypes.func,
  preventCloseOnClickOutside: PropTypes.bool
}

export default Modal
