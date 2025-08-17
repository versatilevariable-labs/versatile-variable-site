import React from 'react';
import logo from './assets/vv-logo.png';
import promo from './assets/vv-banner.jpeg';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Versatile Variable Logo" className="logo" />
        <h1>Versatile Variable</h1>
      </header>

      <section className="hero">
        <h2>Need for Coding</h2>
        <p>Unlock the future of IT for learners, freshers, and career switchers.</p>
        <img src={promo} alt="Promo" className="promo-img" />
        <a href="#contact" className="btn">Join the Movement</a>
      </section>

      <footer id="contact" className="footer">
        <p>Contact us at <a href="mailto:hello@versatilevariable.com">hello@versatilevariable.com</a></p>
        <small>&copy; {new Date().getFullYear()} Versatile Variable</small>
      </footer>
    </div>
  );
}

export default App;