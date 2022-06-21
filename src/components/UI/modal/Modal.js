import React from 'react';
import cl from './Modal.module.scss'
import UserButton from "../button/UserButton";

const Modal = ({children, isVisibilityModal, setIsVisibilityModal}) => {

  let rootClasses = [cl.modalWrapper]
  if(isVisibilityModal){
    rootClasses = [...rootClasses, cl.active]
  }

  const handleIsVisibilityModal = () => {
    setIsVisibilityModal(false)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={handleIsVisibilityModal}>
      <div className={cl.modalContainer} onClick={(e)=> e.stopPropagation()}>
        {children}
        <UserButton handleSubmit={handleIsVisibilityModal}>
          Back
        </UserButton>
      </div>
    </div>
  );
};

export default Modal;