import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import HomePage from './HomePage.js';
import CreatePage from './CreatePage.js';
import NotFoundPage from './NotFoundPage.js';

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

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create" component={CreatePage} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
  </Router>
);


export default AppRouter