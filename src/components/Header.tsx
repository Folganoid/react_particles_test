import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Header.module.scss';

export default function NavBar() {
  return (
    <header className={cl.header}>
      <nav>
        <ul className={cl.list}>
          <li className={cl.item}>
            <Link to="/page1">Page1</Link>
          </li>
          <li className={cl.item}>
            <Link to="/page2">Page2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
