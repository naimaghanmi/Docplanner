
import React from 'react'
import logo from "./logo.png";
function navBar(props) {
 return (
 <div className="navMenu">
<img  src={logo}></img>
<ul className="navbar">
 {props.menu.map(el =>
  <li className="header-list">
    {el.title} 
    <div className="dropD"> {el.drop && el.drop.map(e => 
 <div className="dropdown-content">{e}</div> )
 }</div>
    
  </li>
 )}
</ul>
</div>
)
}
export default navBar
