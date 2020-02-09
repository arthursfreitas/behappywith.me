import React from 'react';
import './index.css';
import './img/logo.png';

export default function Header() {
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
      <a href="/"><img className="logo" src="img/logo.png" alt=""/></a>
      <h4 className="labe">Agenda de Gentilezas</h4>
    </div>
  );
}

export default Header;