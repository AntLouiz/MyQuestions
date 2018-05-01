import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage.js';

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={HomePage} />
    </div>
  </Router>
);


export default AppRouter