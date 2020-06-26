import React from 'react';
import '../style/SideMenu.css';
import { Link } from "react-router-dom";



function Header() {

  const mystyle = {
    color: "#FFFFFF",
    fontSize: "1em",
  };

  return (
    <div>
      <div className="contenedor">
        <img className="menu-img" src="https://i.ibb.co/Xbt0snC/header-x2.png" />
        <div className="texto-encima"><h1>Electronics</h1></div>
      </div>


      <div className="SideMenu-container">
      </div >
      <nav>
        <div id="menuA">
          <div href="#" className="showhim"><span className="menumov"> &#8803;</span>
            <div className="showme">
              <li>Sort by:</li>
              <li><Link to="/Buy" >Most recent</Link></li>
              <li><Link to="/LowestPrice" >Lowest Price</Link></li>
              <li><Link to="/HighestPrice" >Highest Price</Link></li>
              <li><Link to="/Points" >add points</Link></li>
              <li><Link to="/RedeemedPoint" >historial</Link></li>
              <hr></hr>
            </div>
          </div>
        </div>

        <ul className="elivi">
        <li className="fac">Sort by:</li>
          <li className="fac"><Link to="/Buy" >Most recent</Link></li>
          <li className="fac"><Link to="/LowestPrice" >Lowest Price</Link></li>
          <li className="fac"><Link to="/HighestPrice" >Highest Price</Link></li>
          <li className="fac"><Link to="/Points" >add points</Link></li>
          <li className="fac"><Link to="/RedeemedPoint" >historial</Link></li>

        </ul>

      </nav>
      <hr className="hr"></hr>
    </div>
  )
}


export default Header;
