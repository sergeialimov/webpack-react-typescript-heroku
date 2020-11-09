import React from "react";
import axios from 'axios';

const hostName = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:8090/'
  : 'https://tracker-fcc.herokuapp.com/';


type Props = {
  username: string,
}

class NewUser extends React.Component<Props> {
  async componentDidMount () {
    const { username } = this.props;
    console.log('---------', username)
    const res = await axios({
      method: 'post',
      url: `${hostName}api/exercise/new-user`,
      data: {
        username,
      }
    });
    console.log('------------', res.data);

    this.setState({
      username,
    });
  }

  render() {
    return (
      <div>{username}</div>
    )
  }
}

export default NewUser;
