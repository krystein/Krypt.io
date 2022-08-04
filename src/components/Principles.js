import React, { useState, useRef } from "react";

//import components
import styled from "styled-components";
import Arrow from "../img/Arrow.svg";
import Arrow2 from "../img/Arrow2.svg";
import Arrow3 from "../img/Arrow-right.svg";
import { principleData } from "../data/principleData";

const PrinciplesContainer = styled.section`
  padding: 70px;
  @media screen and (max-width: 1200px) {
    padding: 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 0px 70px;
    @media Screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
      padding: 0px 30px;
    }
  }
`;
const PrincipleContent = styled.div`
  padding: 20px 70px;
  @media Screen and (max-width: 480px) {
    padding: 20px 20px;
  }
  .Principle {
    display: flex;
    padding-bottom: 20px;
  }
  .prince {
    color: #ff9f0d;
    font-family: Share Tech;
    font-size: 1rem;
  }
  h1 {
    color: #143a5a;
    font-family: Inter, sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;
const Principlewrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: ${({ xy, current }) => {
      return xy === current ? "inline" : "none";
    }};
  }
`;
const PrincipleContent1 = styled.div``;
const PrinciplePage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media Screen and (max-width: 768px) {
    display: block;
    padding: 20px;
  }
  .page {
    font-family: Laila, sans-serif;
    font-size: 1.8rem;
  }
  div {
    display: flex;
    justify-content: right;
    @media Screen and (max-width: 768px) {
      justify-content: space-between;
    }
  }
  button {
    background-color: #143a5a;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 30px;
    width: 30px;
    color: #fff;
  }
  .btn {
    background-color: transparent;
    border: 1px solid #143a5a;
    border-radius: 0px 10px 8px 10px;
    height: 30px;
    width: 30px;
    color: #fff;
  }
`;
const PrincipleImg = styled.img`
  width: 100%;
  height: 30vh;
  @media Screen and (max-width: 1200px) {
    height: 50vh;
    width: 50%;
    display: flex;
    justify-content: center;
  }
  @media Screen and (max-width: 768px) {
    height: 30vh;
    width: 100%;
  }
  @media Screen and (max-width: 480px) {
    height: 30vh;
    width: 100%;
  }
`;
const PrincipleH = styled.div`
  color: #143a5a;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.46rem;
  padding: 20px 0px;
  @media Screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Principleh2 = styled.div`
  color: #143a5a;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 200%;
  p {
    color: orange;
  }
  @media Screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Principles = () => {
  const [current, setCurrent] = useState(0);
  const length = principleData.length;
  const timeout = useRef(null);
  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(principleData) || principleData.length <= 0) {
    return null;
  }
  return (
    <PrinciplesContainer>
      <PrincipleContent>
        <div className="Principle">
          <h1 className="prince">Principles</h1>
          <img src={Arrow} alt="" />
        </div>
        <PrinciplePage>
          <h1 className="page">The most trusted cryptocurrency platform</h1>
        </PrinciplePage>
      </PrincipleContent>
      <div className="wrapper">
        {principleData.map((item, index) => {
          return (
            <Principlewrapper key={index} xy={index} current={current}>
              <PrincipleContent1>
                <div>
                  <PrincipleImg src={item.Img} alt="" />
                  <PrincipleH>{item.Title}</PrincipleH>
                  <Principleh2>
                    {item.Page}
                    <p>{item.Pge}</p>
                  </Principleh2>
                </div>
              </PrincipleContent1>
            </Principlewrapper>
          );
        })}
      </div>
      <PrinciplePage>
        <div className="bt">
          <button>
            <img src={Arrow2} alt="" onClick={prevSlide} />
          </button>
          <button className="btn">
            <img src={Arrow3} alt="" onClick={nextSlide} />
          </button>
        </div>
      </PrinciplePage>
    </PrinciplesContainer>
  );
};

export default Principles;
