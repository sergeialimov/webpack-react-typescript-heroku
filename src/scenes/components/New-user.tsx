import React from 'react';
import { Link } from "react-router-dom";


const submitForm = () => {
  console.log('submit-form');
}

const fillUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
  const username = e.target.value;
  // this.setState(() => ({
  //   username,
  // }));
  console.log(e.target.value);
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
