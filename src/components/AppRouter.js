import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import HomePage from '../pages/HomePage.js';
import CreatePage from '../pages/CreatePage.js';
import ListPage from '../pages/ListPage.js';
import DetailPage from '../pages/DetailPage.js';
import ArchivedPage from '../pages/ArchivedPage.js';
import NotFoundPage from '../pages/NotFoundPage.js';
import Menu from './Menu.js';
import Footer from './Footer.js';

const AppRouter = () => (
  <Router>
    <div>
      <Menu />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create/questionnaires" component={CreatePage} />
        <Route exact path="/list/questionnaires" component={ListPage} />
        <Route exact path="/archived/questionnaires" component={ArchivedPage} />
        <Route path="/questionnaire/detail/:key/:id" component={DetailPage} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </div>
  </Router>
);


export default AppRouter