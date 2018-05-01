import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage.js';
import CreatePage from './CreatePage.js';

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Questions</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={HomePage} />
      <Route exact path="/create" component={CreatePage} />
    </div>
  </Router>
);


export default AppRouter