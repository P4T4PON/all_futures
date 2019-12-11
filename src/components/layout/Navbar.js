import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <h1>
          {' '}
          <i class="fas fa-hippo"></i> Navbar
        </h1>

        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
