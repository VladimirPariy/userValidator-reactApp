import React, {useState} from 'react'
import cl from './App.module.scss'
import FormForCreatingUser from "./components/formForCreatingUser/FormForCreatingUser";
import ValidUsersList from "./components/validUsersList/ValidUsersList";
import Modal from "./components/UI/modal/Modal";

function App() {
  const [validateUser, setValidateUser] = useState([])
  const [isVisibilityModal, setIsVisibilityModal] = useState(false)
  const [isAgeModalVisibility, setIsAgeModalVisibility] = useState(false)


  let modal = <Modal
                isVisibilityModal={isVisibilityModal}
                setIsVisibilityModal={setIsVisibilityModal}>
                Некорректные данные
              </Modal>;

  if (isAgeModalVisibility) {
    modal = <Modal
              isVisibilityModal={isVisibilityModal}
              setIsVisibilityModal={setIsVisibilityModal}>
              Возраст должен быть больше 0
            </Modal>
  }

  return (
    <main className={cl.wrapper}>
      <FormForCreatingUser setValidate={setValidateUser}
                           setIsVisibilityModal={setIsVisibilityModal}
                           setIsAgeModalVisibility={setIsAgeModalVisibility}/>
      {validateUser.length > 0 && <ValidUsersList users={validateUser}/>}
      {isVisibilityModal && modal}
    </main>
  );
}

export default App;
