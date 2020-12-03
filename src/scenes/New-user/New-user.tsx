import React from "react";
import { useStore } from 'react-redux';

export const NewUser = () => {
  const store = useStore();
  const state = store.getState();
  const { user } = state;
  const userData = `{"username":"${user.name}","_id":"${user.id}"}`;

  return (
    <div>{userData}</div>
  )
}
