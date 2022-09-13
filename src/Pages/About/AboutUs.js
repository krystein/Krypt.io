import React from "react";
import styled from "styled-components";
import Image from "../../img/img7.PNG";

const AboutContainer = styled.section`
  display: flex;
  padding: 10px;
  margin: 10px 30px;
  align-items: center;
  background-color: #e7c482;
  @media Screen and (max-width: 1200px) {
    display: grid;
    justify-content: center;
    padding: 20px;
    margin: 10px 0px;
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
const AboutContent = styled.div`
  width: 50%;
  padding: 10px;
  @media Screen and (max-width: 1200px) {
    width: 100%;
  }
`;
const AboutContent1 = styled.div`
  padding: 50px;
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
  .Aboutp {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: clamp(0.8rem, 6vw, 1.3em);
    font-weight: 500;
    line-height: 2rem;
  }
  .Abouth1 {
    color: #143a5a;
    font-family: Laila, sans-serif;
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 700;
    text-transform: titlecase;
    line-height: 3.13rem;
  }
  .Aboutdiv {
    display: flex;
  }
`;
const AboutImg = styled.img`
  width: 100%;
  @media Screen and (max-width: 1200px) {
    padding: 5px;
  }
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutImg src={Image} alt="" />
      </AboutContent>
      <AboutContent1>
        <h1 className="Abouth1">Krypt.io</h1>
        <p className="Aboutp">
          We are building the cryptoeconomy – a more fair, accessible,
          efficient, and transparent financial system enabled by crypto.
        </p>
        <p className="Aboutp">
          We started in 2019 with the radical idea that anyone, anywhere, should
          be able to easily and securely send and receive Bitcoin. Today, we
          offer a trusted and easy-to-use platform for accessing the broader
          cryptoeconomy.
        </p>
      </AboutContent1>
    </AboutContainer>
  );
};

export default AboutUs;
