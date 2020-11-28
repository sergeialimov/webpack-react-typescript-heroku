import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { hostName } from '../../../config';


interface Props {
  saveUser: (name: string) => void,
}

export const NewUserForm: React.FC<Props> = (props) => {
  const [ name, setName ] = useState<string>('');

  const fillUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  
  const submitForm = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log('** name', name);
    e.preventDefault();
    // dispatch
    props.saveUser(name);
    // const username = 'tmp-name';
    // const res = await axios({
    //     method: 'post',
    //     url: `${hostName}api/exercise/new-user`,
    //     data: {
    //       username,
    //     }
    //   });
    // console.log('------------', res.data);
  }

  return (
    <form>
    {/* <form action="/api/exercise/new-user" method="post"> */}
      <h3>Create a New User</h3>
      {/* <p><code>POST /api/exercise/new-user</code></p> */}
      <input id="uname" type="text" name="username" placeholder="username" onChange={fillUserName} />
      <input type="submit" value="Submit" onClick={submitForm} />
    </form>
  )
};