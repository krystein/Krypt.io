import React from "react";

//import components
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  height: 60px;
  background: #08111c;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;

const Logo = styled.div`
color: #e7c482;
display: flex;
align-items: center;
padding: 0 1rem;
font-size: 1rem;
font-family: inter, sans-serif;
height: 100%
cursor: pointer;
text-decoration: none;
:hover{
    color: #fff;
}
  font-style: italic;
  font-size: clamp(0.8rem, 8vw, 1.2rem);
  img {
    width: 50px;
  }
`;

const MenuBar = styled(FaBars)`
  display: none;
  @media Screen and (max-width: 1200px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #143a5a;
  }
  @media Screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #143a5a;
  }
  @media Screen and (max-width: 480px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #143a5a;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media Screen and (max-width: 1200px) {
    display: none;
  }
  @media Screen and (max-width: 768px) {
    display: none;
  }
  @media Screen and (max-width: 480px) {
    display: none;
  }
`;
const NavMenuLink = styled.a`
  cursor: pointer;
  color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
font-size: 1rem;
font-family: inter, sans-serif;
height: 100%
cursor: pointer;
text-decoration: none;
:hover{
    color: #FF9F0D;
}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  gap: 20px;
  button {
    background-color: #e7c482;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 150px;
    color: #fff;
    font-family: Share Tech;
    font-size: 18px;
  }
  div {
    margin-right: 30px;
  }
  .img {
    width: 20px;
  }
  @media Screen and (max-width: 1200px) {
    display: none;
  }
  @media Screen and (max-width: 768px) {
    display: none;
  }
  @media Screen and (max-width: 480px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">
        <h1>Krypt.io</h1>
      </Logo>
      <MenuBar onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLink href={item.link} key={index}>
              {item.title}
            </NavMenuLink>
          );
        })}
      </NavMenu>
      <NavBtn>
        <button>Open Account</button>
        <button>Log in</button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
