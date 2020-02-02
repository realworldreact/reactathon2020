import React, { useState } from 'react'
import './index.css'

const Modal = ({ content, isOpen, onClose }) => (
  <div className={`modal ${isOpen ? 'modal-is-open' : ''}`}>
    <div className='modal-content'>
      <span className='modal-close' onClick={onClose}>
        &times;
      </span>
      {content}
    </div>
  </div>
)

const ModalWrapper = ({ body, isModalOpen, onClose }) => (
  <Modal
    isOpen={isModalOpen}
    content={body}
    onClose={onClose}
  />
)

export default ModalWrapper
