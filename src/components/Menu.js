import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="http://www.iconsdb.com/icons/preview/color/23D160/literature-xxl.png" />
          </a>
        </div>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item button is-white">
            Home
          </Link>
          <Link to="/create" className="navbar-item button is-success is-outlined">
            Create Questionnarie
          </Link>
          <Link to="/list" className="navbar-item button is-info is-outlined">
            My Questionnaries
          </Link>
        </div>
      </nav>
    );
}

export default Menu;