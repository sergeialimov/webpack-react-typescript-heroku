import React from "react";
import { useStore } from 'react-redux';

export const NewUser = () => {
  const store = useStore();
  const state = store.getState();
  console.log(state.username);

  return (
    <div>{state.username}</div>
  )
}
