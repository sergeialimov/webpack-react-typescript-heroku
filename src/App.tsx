import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './scenes/Home';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
        {/* <Route path="/products/:id" component={Product} /> */}
    </Router>
  );
}

export default App;