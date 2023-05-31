import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Header.module.scss';

export default function NavBar() {
  return (
    <header className={cl.header}>
      <nav>
        <ul className={cl.list}>
          <li className={cl.item}>
            <Link to="/page1">Lines</Link>
          </li>
          <li className={cl.item}>
            <Link to="/page2">Snow</Link>
          </li>
          <li className={cl.item}>
            <Link to="/page3">Big</Link>
          </li>
          <li className={cl.item}>
            <Link to="/page4">FireWorks</Link>
          </li>
          <li className={cl.item}>
            <Link to="/page5">Confetti</Link>
          </li>
          <li className={cl.item}>
            <Link to="/page6">Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
