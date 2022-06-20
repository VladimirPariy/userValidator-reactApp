import React, {useState} from 'react';
import Card from "../UI/card/Card";
import UserInput from "../UI/input/UserInput";
import UserButton from "../UI/button/UserButton";

const FormForCreatingUser = ({setValidate}) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')


  return (
    <Card>
      <UserInput setState={setName} state={name}>
        Имя
      </UserInput>
      <UserInput state={age} setState={setAge}>
        Возраст
      </UserInput>
      <UserButton formObj={{name, age}} setName={setName} setAge={setAge} setValidate={setValidate}>
        Добавить пользователя
      </UserButton>
    </Card>
  );
};

export default FormForCreatingUser;