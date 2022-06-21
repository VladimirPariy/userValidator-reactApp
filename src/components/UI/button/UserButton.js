import React from 'react';
import cl from './UserButton.module.scss'

const UserButton = ({children, handleSubmit}) => {
  return (
    <button type='submit' className={cl.btn} onClick={handleSubmit}>
      {children}
    </button>
  );
};

export default UserButton;