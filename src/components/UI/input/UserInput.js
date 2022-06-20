import React from 'react';

const UserInput = ({children, state, setState}) => {

  const handlerChangeName = (e) => {
    setState(e.target.value)
  }

  return (
    <>
      <label>{children}</label>
      <input type="text" onChange={handlerChangeName} value={state}/>
    </>
  );
};

export default UserInput;