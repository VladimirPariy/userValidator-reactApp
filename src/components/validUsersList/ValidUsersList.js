import React from 'react';
import Card from "../UI/card/Card";
import ValidUserItem from "../validUserItem/ValidUserItem";
import cl from './ValidUserList.module.scss'

const ValidUsersList = ({users}) => {
  return (
    <div className={cl.container}>
      <Card>
        <ValidUserItem usersList={users}/>
      </Card>
    </div>
  );
};

export default ValidUsersList;