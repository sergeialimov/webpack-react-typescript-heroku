import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { hostName } from '../../config';

const [ state, setState ] = useState<string>('');
// const [ name, setName, setState ] = useState<string>('');


const submitForm = async () => {
  console.log('submit-form');
  const username = 'tmp-name';

  const res = await axios({
      method: 'post',
      url: `${hostName}api/exercise/new-user`,
      data: {
        username,
      }
    });
  console.log('------------', res.data);
}

const fillUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
  const name = e.target.value;
  setState(name);
  console.log('** name', name);
  console.log('** state', state);
}

export const NewUserForm = () => {
  return (
    <form action="/api/exercise/new-user" method="post">
      <h3>Create a New User</h3>
      <p><code>POST /api/exercise/new-user</code></p>
      <input id="uname" type="text" name="username" placeholder="username" onChange={fillUserName} />
      <nav>
        <Link
          to={{
            pathname: '/api/exercise/new-user',
          }}
        >
          <input type="submit" value="Submit" onClick={submitForm} />
        </Link>
      </nav>
    </form>
  )
}
