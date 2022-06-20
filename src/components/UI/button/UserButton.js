import React from 'react';

const UserButton = ({children, formObj, setAge, setName, setValidate}) => {

  const clearInput = () => {
    setAge('')
    setName('')
  }

  const handlerSubmitForm = (e) => {
    e.preventDefault()
    if (formObj.name.length < 1 || formObj.age.length < 1) {
      console.log('modal')
      clearInput()
      return;
    }
    if (+formObj.age < 0) {
      console.log('error age')
      clearInput()
      return;
    }
    setValidate(formObj)
    clearInput()
  }

  return (
    <button onClick={handlerSubmitForm} type='submit'>{children}</button>
  );
};

export default UserButton;