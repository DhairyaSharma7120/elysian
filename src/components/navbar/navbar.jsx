import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Navbar({ active }) {
 
  return (
    <NavbarComponent>
      <Link className={`navLink ${active === "/"  &&  "active" }`} to="/">
        Home
      </Link>

      <Link className={`navLink ${active === "/shop" && "active"}`} to="/shop">
        Shop
      </Link>
      <Link
        className={`navLink ${active === "/about-us" && "active"}`}
        to="/about-us"
      >
        About Us
      </Link>
      <Link
        className={`navLink ${active === "/contact-us" && "active"}`}
        to="/contact-us"
      >
        Contact Us
      </Link>
      <div
        className={`animation ${active === "/" && "start-home"} 
      ${active === "/shop" && "start-shop"}
      ${active === "/about-us" && "start-about"}
      ${active === "/contact-us" && "start-contact"}
      `}
      ></div>
    </NavbarComponent>
  );
}

export default Navbar;

// styles using styled components

const NavbarComponent = styled.nav`
  /* position: fixed; */
  margin: 0px;
  width: 490px;
  height: 50px;
  padding:10px 0px;
  transition: all 0.3s ease 0s;
  
  
  
  .animation {
    position: relative;
    height: 5px;
    top: 0;
    z-index: 0;
    background-color: #da0404;
    transition: all 0.3s ease 0s;
  }
  a {
    font-size: 15px;
    font-weight: bolder;
    text-decoration: none;
    color:black;
    text-transform: uppercase;
    line-height: 50px;
    position: relative;
    z-index: 1;
    display: inline-block;
    text-align: center;
  }
  

  a:nth-child(1) {
    width: 100px;
  }
  .start-home,
  a:nth-child(1):hover ~ .animation {
    width: 100px;
    left: 0;
  }
  a:nth-child(2) {
    width: 100px;
  }
  .start-shop,
  a:nth-child(2):hover ~ .animation {
    width: 100px;
    left: 100px;
  }
  a:nth-child(3) {
    width: 140px;
  }
  .start-about,
  a:nth-child(3):hover ~ .animation {
    width: 140px;
    left: 200px;
  }
  a:nth-child(4) {
    width: 150px;
  }
  .start-contact,
  a:nth-child(4):hover ~ .animation {
    width: 150px;
    left: 340px;
  }

  .active {
    font-size: 16px;
    font-weight: bolder;
    transition: 0.3s;
    color: #da0404!important;
  }


  @media(max-width:500px){
    transform: scale(0.8);
    a{
      font-size:17px;
    }
  }
  @media(max-width:400px){
    transform: scale(0.74);
    font-size:17px;
    a{
      font-size:17px;
    }
  }
`;
