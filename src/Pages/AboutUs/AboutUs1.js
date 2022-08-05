import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 20px 70px;
  margin: 0px 30px;
  background-color: #e7c482;
  @media Screen and (max-width: 1200px) {
    padding: 20px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;
const AboutH = styled.div`
  color: #143a5a;
  font-family: Laila, sans-serif;
  font-size: clamp(0.9rem, 8vw, 2rem);
  font-weight: 700;
  text-transform: titlecase;
  line-height: 3.13rem;
  padding-top: 20px;
`;
const AboutP = styled.div`
  color: #979797;
  font-family: Inter, sans-serif;
  font-size: clamp(0.7rem, 8vw, 1em);
  font-weight: 500;
  line-height: 2rem;
`;

const AboutUs1 = () => {
  return (
    <AboutContainer>
      <AboutH>Who we are</AboutH>
      <AboutP>
        Krypt.io is an award winning crypto and commodities broker, providing
        trading services and facilities to both retail and institutional
        clients. Through its policy of providing the best possible trading
        conditions to its clients and allowing both scalpers and traders using
        expert advisors unrestricted access to its liquidity, Krypt.io has
        positioned itself as the forex broker of choice for traders worldwide.
      </AboutP>
      <AboutH>What we provide</AboutH>
      <AboutP>
        Krypt.io offers various account types, trading software and tools to
        facilitate individuals and institutional customers to trade Forex and
        Derivatives online. All Retail, Affiliates and White Label clients have
        the opportunity to access various spreads and liquidity via state of the
        art automated trading platforms. Krypt.io provides an unparalleled
        variety of account options that clients can select to enjoy a tailored
        trading experience that perfectly suits their needs. Coupled with
        superior trading conditions and lightning fast execution, Krypt.io
        provides all the tools and services needed for clients of any level to
        realise their trading ambitions.
      </AboutP>
    </AboutContainer>
  );
};

export default AboutUs1;
