import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './scenes/Home';
import NewUser from './scenes/New-user';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/api/exercise/new-user" exact component={NewUser} />
        {/* <Route path="/products/:id" component={Product} /> */}
    </Router>
  );
}

export default App;