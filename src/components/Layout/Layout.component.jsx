import React from 'react';

import './Layout.styles.css';
import NavBar from '../NavBar';

function Layout({ children }) {
  return (
    <main className="container">
      <NavBar />
      {children}
    </main>
  );
}

export default Layout;
