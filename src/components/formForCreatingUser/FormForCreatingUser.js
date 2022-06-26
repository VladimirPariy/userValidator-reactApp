import React, {useState} from 'react';
import Card from "../UI/card/Card";
import UserInput from "../UI/input/UserInput";
import UserButton from "../UI/button/UserButton";
import cl from './FormForCreatingUser.module.scss'

const FormForCreatingUser = ({setValidate, setIsVisibilityModal, setIsAgeModalVisibility}) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const clearInput = () => {
    setAge('')
    setName('')
  }

  const handlerSubmitForm = (e) => {
    e.preventDefault()
    const formObj = {name, age}
    if (formObj.name.trim().length < 1 || formObj.age.length < 1) {
      setIsVisibilityModal(true)
      return;
    }
    if (+formObj.age < 1) {
      setIsVisibilityModal(true)
      setIsAgeModalVisibility(true)
      return;
    }
    setValidate((prev)=> [formObj, ...prev])
    setIsVisibilityModal(false)
    setIsAgeModalVisibility(false)
    clearInput()
  }

  return (
    <div className={cl.container}>
      <Card>
        <UserInput setState={setName}
                   state={name}
                   type={'text'}>
          Имя
        </UserInput>
        <UserInput state={age}
                   setState={setAge}
                   type={'number'}>
          Возраст
        </UserInput>
        <UserButton handleSubmit={handlerSubmitForm}>
          Добавить пользователя
        </UserButton>
      </Card>
    </div>
  );
};

export default FormForCreatingUser;