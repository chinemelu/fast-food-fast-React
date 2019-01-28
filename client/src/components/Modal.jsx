import React from 'react';

const Modal = ({
  handleClose,
  show,
  children,
  modalInnerContainerClass,
  modalOuterContainerClass
}) => {
  return (
    <div className={modalOuterContainerClass}>
      <div className={modalInnerContainerClass}>
        {children}
      </div>
    </div>
  )
}

export default Modal;
