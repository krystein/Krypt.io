import React from "react";

//import styled components
import styled, { keyframes } from "styled-components";

const Activitiesanimation = keyframes`
to {left: 0px;}
from {left: -400px;}
`;
const Activityanimation = keyframes`
to {right: 0px;}
from {right: -400px;}
`;

const HeroContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;

  @media Screen and (max-width: 1200px) {
    display: grid;
    height: auto;
    justify-contents: center;
  }
  @media Screen and (max-width: 768px) {
    display: grid;
    justify-contents: center;
  }
  @media Screen and (max-width: 480px) {
    display: grid;
    justify-contents: center;
  }
`;
const HeroContent = styled.div`
  width: 50%;
  margin-top: 60px;
  position: relative;
  animation-name: ${Activitiesanimation};
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  @media Screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 20px;
  }
  @media Screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
  @media Screen and (max-width: 480px) {
    width: 100%;
    margin-top: 8px;
  }
  .btn {
    display: flex;
    @media Screen and (max-width: 1200px) {
      display: flex;
      justify-content: center;
    }
    @media Screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
    @media Screen and (max-width: 480px) {
      display: flex;
      justify-content: center;
    }
  }
  .btn1 {
    margin-left: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 40px;
    background-color: #e7c482;
    @media Screen and (max-width: 1200px) {
      width: 150px;
      height: 40px;
      margin-left: 0rem;
    }
    @media Screen and (max-width: 768px) {
      width: 150px;
      height: 35px;
      margin-left: 0rem;
    }
    @media Screen and (max-width: 480px) {
      width: 150px;
      height: 35px;
      margin-left: 0rem;
    }
  }
  .Donate {
    font-family: Inter, sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    @media Screen and (max-width: 768px) {
      font-size: 1rem;
    }
    @media Screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
  button {
    background-color: #143a5a;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 27px;
    width: 100px;
    color: #fff;
  }
  .img1 {
    width: 30px;
    height: 23px;
    @media Screen and (max-width: 1200px) {
      height: 30px;
      width: 30px;
    }
    @media Screen and (max-width: 768px) {
      height: 20px;
      width: 30px;
    }
    @media Screen and (max-width: 480px) {
      height: 20px;
      width: 30px;
    }
  }
`;
const HeroContent1 = styled.div`
  width: 50%;
  margin-top: 60px;
  position: relative;
  animation-name: ${Activityanimation};
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  @media Screen and (max-width: 1200px) {
    width: 100%;
    padding: 6rem;
    margin-top: 0px;
  }
  @media Screen and (max-width: 768px) {
    width: 100%;
    padding: 0rem;
    margin-top: 0px;
  }
  @media Screen and (max-width: 480px) {
    width: 100%;
    padding: 0rem;
    margin-top: 0px;
  }
`;
const Heroh1 = styled.div`
  margin: 12rem 0rem 0rem 10rem;
  color: #fff;
  font-family: Laila, sans-serif;
  font-size: 3rem;
  font-weight: 600;
  text-transform: titlecase;
  line-height: 3.56rem;
  .equal {
    color: #e7c482;
    font-family: Laila, sans-serif;
  }
  @media Screen and (max-width: 1200px) {
    margin-left: 0rem;
    text-align: center;
  }
  @media Screen and (max-width: 768px) {
    margin-left: 0rem;
    text-align: center;
    font-size: 2rem;
  }
  @media Screen and (max-width: 480px) {
    margin-left: 0rem;
    text-align: center;
  }
`;
const Herop = styled.div`
  margin: 0rem 3.5rem 1rem 10rem;
  color: #979797;
  font-family: Inter, sans-serif;
  font-size: clamp(0.7rem, 7vw, 1.2em);
  font-weight: 500;
  line-height: 1.7rem;
  @media Screen and (max-width: 1200px) {
    margin: 0rem;
    text-align: center;
    margin-bottom: 20px;
  }
  @media Screen and (max-width: 768px) {
    margin-left: 0rem;
    text-align: center;
    margin-bottom: 20px;
    padding: 0px 20px;
  }
  @media Screen and (max-width: 480px) {
    margin-left: 0rem;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const NavMenuLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Hero = () => {
  return (
    <HeroContainer id="Home">
      <HeroContent>
        <Heroh1>
          Dream big. <p className="equal">Achieve bigger.</p>
        </Heroh1>
        <Herop>
          Trade with a global broker to achieve your investment goals.
        </Herop>
        <div className="btn">
          <NavMenuLink href="/#Donate">
            <button className="btn1">
              <span className="Donate">Create An Account</span>
            </button>
          </NavMenuLink>
        </div>
      </HeroContent>
      <HeroContent1></HeroContent1>
    </HeroContainer>
  );
};

export default Hero;
