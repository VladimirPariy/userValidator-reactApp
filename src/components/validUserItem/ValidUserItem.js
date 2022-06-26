import React from 'react';
import cl from './ValidUserItem.module.scss'

const ValidUserItem = ({usersList}) => {
  return (
    <>
      {usersList.map((user) => {
        return (
          <div className={cl.userItemContainer} key={Math.random()}>
            <span>Name: {user.name}</span><span>Age: {user.age}</span>
          </div>
        )
      })
      }
    </>
  );
};

export default ValidUserItem;