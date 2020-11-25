import React, { Component } from 'react';
import { NewUserForm } from './components';

// const UserDispatch = React.createContext(null);

interface HomeProps {
  userData: string,
};

interface HomeDispatchProps {
  putUserDataInStore(userData: string): {type: string, payload: string},
}


class Home extends Component<HomeProps & HomeDispatchProps> {
  constructor(props: HomeProps & HomeDispatchProps) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <div className="container">
          <h1>Exercise tracker</h1>

            <NewUserForm />

            <form action="/api/exercise/add" method="post">
              <h3>Add exercises</h3>
              <p><code>POST /api/exercise/add</code></p>
              <input id="uid" type="text" name="userId" placeholder="userId*" />
              <input id="desc" type="text" name="description" placeholder="description*" />
              <input id="dur" type="text" name="duration" placeholder="duration* (mins.)" />
              <input id="dat" type="text" name="date" placeholder="date (yyyy-mm-dd)" />
              <input type="submit" value="Submit" />
            </form>
            <p>
              <strong>GET users's exercise log: </strong>
              <code>GET /api/exercise/log?{'userId'}[&amp;from][&amp;to][&amp;limit]`</code>
            </p>
            <p><strong>{ }</strong> = required, <strong>[ ]</strong> = optional</p>
            <p><strong>from, to</strong> = dates (yyyy-mm-dd); <strong>limit</strong> = number</p>
        </div>
      </div>
    )
  };
}

export default Home;
