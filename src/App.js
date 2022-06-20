import React, {useState} from 'react'
import cl from './App.module.scss'
import FormForCreatingUser from "./components/formForCreatingUser/FormForCreatingUser";

function App() {

  const [validateUser, setValidateUser] = useState({})
  console.log(validateUser)
  return (
    <main className={cl.wrapper}>
      <FormForCreatingUser setValidate={setValidateUser}/>
    </main>
  );
}

export default App;
