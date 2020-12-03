import React from "react";
import { useStore } from 'react-redux';

export const NewUser = () => {
  const store = useStore();
  const state = store.getState();
  const userData = `{"username":"${state.username}","_id":""}`;

  return (
    <div>{userData}</div>
  )
}
