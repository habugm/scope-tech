
import { Link } from 'react-router-dom';
import React from 'react';
function Header() {
  return (
    <>
     <header
  id="header"
  className="site-header header-scrolled position-fixed w-100 text-black"
  style={{ backgroundColor: '#0E87CC', zIndex: 1050 }}
>
  <nav className="navbar px-3 mb-3">
    <div
  className="container-fluid d-flex align-items-center flex-nowrap overflow-auto"
  style={{ whiteSpace: 'nowrap', gap: '2rem' }}
>
  {/* LOGO */}
  <a href="#billboard" className="navbar-brand me-3 flex-shrink-0">
    <img
      src="images/SCOPE.png"
      className="img-fluid logo"
      alt="Logo"
      style={{ maxHeight: '60px' }}
    />
  </a>

  {/* GLITCH EFFECT (only on large screens) */}
  <div className="d-none d-lg-block flex-grow-1 text-center position-relative">
    <div className="glitch-text">SCOPE TECH</div>
  </div>

  {/* MENU */}
  <ul className="navbar-nav d-flex flex-row align-items-center mb-0" style={{ gap: '1.5rem' }}>
    <li className="nav-item d-none d-md-block">
      <a className="nav-link text-white" href="#billboard">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="#mobile-products">Mobiles</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="#smart-watches">Watches</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="#earphones">Earphones</a>
    </li>
  </ul>
</div>


  </nav>
</header>


      
    </>
  );
}

export default Header;
