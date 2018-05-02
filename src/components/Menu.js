import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="http://brandmark.io/logo-rank/random/bp.png" />
          </a>
        </div>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item button is-white">
            Home
          </Link>
          <Link to="/create" className="navbar-item button is-success is-outlined">
            Create Question
          </Link>
        </div>
      </nav>
    );
}

export default Menu;