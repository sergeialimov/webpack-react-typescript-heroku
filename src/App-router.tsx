import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, NewUser } from './scenes';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/api/exercise/new-user" exact component={NewUser} />
    </Router>
  );
}

export default App;
