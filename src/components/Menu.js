import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <Link to="/" className="navbar-item button is-white">
            Home
          </Link>
          <Link to="/create/questionnaires" className="navbar-item button is-success is-outlined">
            Create Questionnaire
          </Link>
          <Link to="/list/questionnaires" className="navbar-item button is-info is-outlined">
            My Questionnaires
          </Link>
          <Link to="/archived/questionnaires" className="navbar-item button is-outlined">
            Archive
          </Link>
        </div>
      </nav>
    );
}

export default Menu;