import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {
  state = { username: '' };

  fillUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    this.setState(() => ({
      username,
    }));
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="Home">
        <div className="container">
          <h1>Exercise tracker</h1>
            <form action="/api/exercise/new-user" method="post">
              <h3>Create a New User</h3>
              <p><code>POST /api/exercise/new-user</code></p>
              <input id="uname" type="text" name="username" placeholder="username" onChange={this.fillUserName} />
              <nav>
                <Link
                  to={{
                    pathname: '/api/exercise/new-user',
                    state: {
                      username: this.state.username || '',
                    }
                  }}
                >
                  <input type="submit" value="Submit" />
                </Link>
              </nav>
            </form>
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
