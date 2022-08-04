import React from "react";

//import components
import styled from "styled-components";
import Image1 from "../img/Be-empathic.svg";
import Image2 from "../img/Be-inclusive.svg";
import Image3 from "../img/Be-leaders.svg";

const ValueContainer = styled.section`
  padding: 10px 70px;
  margin: 0px 30px;
  background-color: #e7c482;
  @media Screen and (max-width: 1200px) {
    padding: 20px;
  }
  .Value {
    display: flex;
    justify-content: center;
    color: #ff9f0d;
  }
  .values1 {
    font-size: 1rem;
    font-family: Share Tech;
  }
  p {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 175%;
    font-family: Inter, sans-serif;
    text-align: center;
    color: #143a5a;
  }
`;
const Valueh1 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 0px;
  color: #143a5a;
  font-family: Laila, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: titlecase;
`;
const ValueContent = styled.div`
  transition: 3s ease-in-out;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 20px 70px;
  @media Screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 30px;
  }
  @media Screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 20px;
  }
  @media Screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
  .img {
    display: flex;
    justify-content: flex-start;
    @media Screen and (max-width: 1200px) {
      display: grid;
      justify-content: center;
    }
  }
`;
const Valuepage = styled.div`
  transform: translatey(0px);
  padding: 20px;
  &:hover {
    .img {
      display: flex;
      justify-content: center;
    }
    border-radius: 0px 30px;
    box-shadow: 0.25rem 0.25rem 3.38rem rgba(114, 104, 16, 0.5);
    transform: scale(1.05);
  }
  @media Screen and (max-width: 1200px) {
    border-radius: 0px 30px;
    box-shadow: 0.25rem 0.25rem 3.38rem rgba(114, 104, 16, 0.5);
  }
`;
const ValueImg = styled.img`
  height: 40px;
`;
const ValueH = styled.div`
  font-weight: 600;
  font-size: 1rem;
  font-family: Inter, sans-serif;
  text-align: center;
  color: #143a5a;
  line-height: 3rem;
  text-transform: uppercase;
`;
const Valueh2 = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 175%;
  font-family: Inter, sans-serif;
  text-align: center;
  color: #143a5a;
`;

const Values = () => {
  return (
    <ValueContainer>
      <Valueh1>The most trusted cryptocurrency platform</Valueh1>
      <p>Here are a few reasons why you should choose Krypt.io</p>
      <ValueContent>
        <Valuepage>
          <div className="img">
            <ValueImg src={Image1} alt="" />
          </div>
          <ValueH>Secure storage</ValueH>
          <Valueh2>
            We store the vast majority of the digital assets in secure offline
            storage
          </Valueh2>
        </Valuepage>
        <Valuepage>
          <div className="img">
            <ValueImg src={Image2} alt="" />
          </div>
          <ValueH>Protected by insurance</ValueH>
          <Valueh2>
            Krypt.io maintains crypto insurance and all USD cash balances are
            covered by FDIC insurance, up to a maximum of $250,000.
          </Valueh2>
        </Valuepage>
        <Valuepage>
          <div className="img">
            <ValueImg src={Image3} alt="" />
          </div>
          <ValueH>Industry best practices</ValueH>
          <Valueh2>
            Krypt.io supports a variety of the most popular digital currencies.
          </Valueh2>
        </Valuepage>
      </ValueContent>
    </ValueContainer>
  );
};

export default Values;
