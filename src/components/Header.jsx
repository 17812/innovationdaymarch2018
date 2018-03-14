import React from 'react';

const Header = (props) => (
  <div className="header" >
    <h1 className="header_title">{props.title}</h1>
    <h6 className="header__subtitle">{props.subtitle}</h6>
    <p></p>
  </div>
);


export default Header;