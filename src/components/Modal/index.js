import React, { useState } from 'react'
import './index.css'

const Modal = ({ content, isOpen }) => (
  <div className={`modal ${isOpen ? 'modal-is-open' : ''}`}>
    <div className='modal-content'>
      <span class='modal-close'>
        &times;
      </span>
      {content}
    </div>
  </div>
)

const ModalWrapper = ({ body, onClose }) => {
  const [isModalOpen, toggleModal] = useState(false)
  <Modal
    isOpen={isModalOpen}
    content={body}
    onClose={() => { toggleModal();  onClose() }}
  />
}

export default ModalWrapper
