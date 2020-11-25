import React, { Component } from 'react';
import { NewUserForm, NewExerciseForm } from './components';

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

            <NewExerciseForm />

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
