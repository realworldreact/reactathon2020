import React from 'react'
import './index.css'

const Modal = ({ content, isOpen, onClose, className }) => (
  <div className={`modal ${className} ${isOpen ? 'modal-is-open' : ''}`}>
    <div className='modal-content'>
      <span role='button' tabIndex={0} className='modal-close' onClick={onClose} onKeyPress={() => {}}>
        &times;
      </span>
      {content}
    </div>
  </div>
)

const ModalWrapper = ({ className = '', body, isModalOpen, onClose }) => (
  <Modal
    className={className}
    isOpen={isModalOpen}
    content={body}
    onClose={onClose}
  />
)

export default ModalWrapper
