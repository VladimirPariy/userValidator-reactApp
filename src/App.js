import React from 'react'
import Card from "./components/UI/card/Card";
import cl from './App.module.scss'

function App() {
  return (
    <main className={cl.wrapper}>
      <Card>
        <label>Имя</label>
        <input type="text"/>
        <label>Возраст</label>
        <input type="text"/>
        <button>Добавить пользователя в список</button>
      </Card>
    </main>
  );
}

export default App;
