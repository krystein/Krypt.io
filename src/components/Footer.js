import React from "react";

//import components
import styled from "styled-components";
import Image1 from "../img/Call1.svg";
import Image2 from "../img/Email.svg";
import Image4 from "../img/Facebook.svg";
import Image5 from "../img/Instagram.svg";
import Image6 from "../img/Twitter.svg";
import Image7 from "../img/Linkedin.svg";
import Image3 from "../img/Location.svg";

const FooterContainer = styled.section`
  width: 100%;
`;
const Footercontent = styled.div`
  padding: 20px 0px;
  padding-bottom: 40px;
  background-color: #08111c;
  display: flex;
  justify-content: space-evenly;
  @media Screen and (max-width: 768px) {
    display: grid;
    justify-content: space-between;
    padding-left: 30px;
  }
`;
const Footercontent1 = styled.div`
  background-color: #143a5a;
  color: #fff;
  text-align: center;
  padding: 10px;
  h4 {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-align: center;
  }
`;
const Footerpage = styled.div`
  line-height: 40px;
  @media Screen and (max-width: 768px) {
    line-height: 30px;
    margin-bottom: 10px;
  }
  div {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    align-items: center;
  }
  .mail {
    text-decoration: underline;
  }
  img {
    color: #736d18;
  }
`;
const Footerpage1 = styled.div`
  @media Screen and (max-width: 768px) {
    line-height: 30px;
    margin-bottom: 10px;
  }
  h2,
  h3 {
    line-height: 30px;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
    color: #979797;
  }
  h2 {
    font-size: 16px;
  }
`;
const Footerpage2 = styled.div`
  line-height: 40px;
  @media Screen and (max-width: 768px) {
    line-height: 30px;
    margin-bottom: 20px;
  }
  h2,
  h3 {
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
    color: #979797;
  }
  h2 {
    font-size: 16px;
  }
`;
const Footerpage3 = styled.div`
  .btn {
    background-color: #e7c482;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 150px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: center;
    font-family: Share Tech;
    font-size: 14px;
  }
  h2 {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 15px;
    color: #979797;
  }
`;
const Logo = styled.div`
  padding: 10px;
  color: #fff;
  img {
    width: 50px;
  }
`;
const Social = styled.div`
  padding: 20px 0px;
  button {
    background: hsla(207, 64%, 22%, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px 8px 8px 8px;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    cursor: pointer;
  }
  img {
    width: 11px;
  }
  .btn1 {
    width: 6px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Footercontent>
        <Footerpage>
          <Logo to="/">
            <h1>Krypt.io</h1>
          </Logo>
          <div>
            <img src={Image1} alt="" className="img" />
            1(917)365-9438
          </div>
          <div className="mail">
            <img src={Image2} alt="" className="img" />
            help@kryptio.org
          </div>
          <div>
            <img src={Image3} alt="" className="img" />
            24 Capano Dr STE 4A, Newark, DE 19702
          </div>
        </Footerpage>
        <Footerpage1>
          <h2>General</h2>
          <h3>About Us</h3>
          <h3>Investment</h3>
          <h3>Trading Platform</h3>
          <h3>Account</h3>
          <h3>Analysis</h3>
        </Footerpage1>
        <Footerpage2>
          <h2>Information</h2>
          <h3>Activities</h3>
          <h3>BlockChain</h3>
          <h3>Mission</h3>
          <h3>Strategic Objectives</h3>
          <h3>Blog</h3>
        </Footerpage2>
        <Footerpage3>
          <p>
            Subscribe to our news Letter to get
            <br /> latest updates
          </p>
          <button className="btn">Request Advice</button>
          <Social>
            <button>
              <img src={Image4} alt="" className="btn1" />
            </button>
            <button>
              <img src={Image5} alt="" />
            </button>
            <button>
              <img src={Image6} alt="" />
            </button>
            <button>
              <img src={Image7} alt="" />
            </button>
          </Social>
        </Footerpage3>
      </Footercontent>
      <Footercontent1>
        <h4>
          Copyright © 2020 krypt.io. All rights reserved "created by krystein
          HQ”.
        </h4>
      </Footercontent1>
    </FooterContainer>
  );
};

export default Footer;
