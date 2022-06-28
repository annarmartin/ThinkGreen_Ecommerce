import React from 'react';

export default function Header(props) {
  return (
    <header className="block center">
      <div>
          <h1>THINK<div style={{color: '#039B01', display:'inline'}}> GREEN</div></h1>
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Shopping</li>
        <li>Cart</li>
      </ul>
    </header>
  );
}