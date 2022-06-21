import React from 'react';
import cl from './UserInput.module.scss'

const UserInput = ({children, state, setState, type}) => {

  const handlerChangeState = (e) => {
    setState(e.target.value)
  }

  return (
    <>
      <label className={cl.label}>{children}</label>
      <input type={type} onChange={handlerChangeState} value={state} className={cl.input}/>
    </>
  );
};

export default UserInput;