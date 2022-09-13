import React from "react";

//import components
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const Logo = styled.a`
color: #e7c482;
display: flex;
align-items: center;
padding: 0 1rem;
font-size: 1.5rem;
font-family: inter, sans-serif;
height: 100%
cursor: pointer;
text-decoration: none;
h1{
  &:hover {
    color: #cd853f;
    transform: scale(1.05);
  }
  font-size: clamp(1.8rem, 8vw, 1.2rem);
  cursor: pointer;
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
    color: #e7c482;
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
const NavMenuLink = styled.div`
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
  a {
    text-decoration: none;
  }
  button {
    background-color: #e7c482;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 150px;
    color: #fff;
    font-family: Share Tech;
    font-size: 18px;
    font-weight: 600;
    user-select: none;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      background: #cd853f;
      transform: scale(1.05);
      border-color: #cd853f;
    }
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
      <Logo href="/">
        <h1>Krypt.io</h1>
      </Logo>
      <MenuBar onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLink key={index}>
              <Link to={item.link}>{item.title}</Link>
            </NavMenuLink>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Link to="../Pages/OpenAccount">
          <button>Open Account</button>
        </Link>
        <Link to="../Pages/Login">
          <button>Log in</button>
        </Link>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
