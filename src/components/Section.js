import React from "react";

//import components
import styled from "styled-components";
import Image from "../img/img6.jpg";

const SectionContainer = styled.section`
  display: flex;
  padding: 0px 30px;
  margin: 20px 30px;
  background-color: #e7c482;
  align-items: center;
  justify-content: center;
  @media Screen and (max-width: 1200px) {
    display: grid;
    justify-content: center;
    padding: 20px;
  }
  @media Screen and (max-width: 768px) {
    display: grid;
    justify-content: center;
  }
  @media Screen and (max-width: 480px) {
    display: grid;
    justify-content: center;
  }
`;
const SectionContent = styled.div`
  display: flex;
  justify-content: right;
  margin-left: 20px;
  width: 30%;
  @media Screen and (max-width: 1200px) {
    display: none;
    width: 100%;
  }
  @media Screen and (max-width: 768px) {
    width: 100%;
  }
  @media Screen and (max-width: 480px) {
    width: 100%;
  }
`;
const SectionContent1 = styled.div`
  width: 50%;
  padding-right: 60px;
  @media Screen and (max-width: 1200px) {
    width: 100%;
    padding-top: 50px;
    padding: 10px 20px;
  }
  @media Screen and (max-width: 768px) {
    width: 100%;
    padding-top: 50px;
    padding: 10px 20px;
  }
  @media Screen and (max-width: 480px) {
    width: 100%;
    padding-top: 50x;
    padding: 10px 20px;
  }
  h1 {
    color: #ff9f0d;
    font-family: Share Tech;
    font-size: 1rem;
  }
  .sectionp {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: clamp(0.7rem, 6vw, 1.1em);
    font-weight: 500;
    line-height: 2rem;
  }
  .sectionh1 {
    color: #143a5a;
    font-family: Laila, sans-serif;
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 700;
    text-transform: titlecase;
    line-height: 2.5rem;
  }
  .sectiondiv {
    display: flex;
  }
`;
const SectionImg = styled.img`
  width: 100%;
  padding-left: 50px;
  @media Screen and (max-width: 1200px) {
    padding: 5px;
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  gap: 20px;
  button {
    background-color: #08111c;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 150px;
    color: #fff;
    font-family: Share Tech;
    font-size: 18px;
    font-weight: 600;
  }
  div {
    margin-right: 30px;
  }
`;

const Section = () => {
  return (
    <SectionContainer>
      <SectionContent1>
        <h1 className="sectionh1">
          Earn up to $13 worth of
          <br />
          crypto
        </h1>
        <p className="sectionp">
          Discover how specific cryptocurrencies work — and get a bit of each
          crypto to try out for yourself.
        </p>
        <NavBtn>
          <button>Get Started</button>
        </NavBtn>
      </SectionContent1>
      <SectionContent>
        <SectionImg src={Image} alt="" />
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
