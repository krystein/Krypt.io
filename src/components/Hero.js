import React, { useState, useEffect, useRef } from "react";

//import styled components
import styled from "styled-components";
import { heroData } from "../data/HeroData";

const HeroSection = styled.section`
  margin: 0px 30px;
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;

const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-itmes: center:
overflow: hidden;
position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
  }
`;

const HeroImage = styled.img`
position: absolute;
top: 0;
left; 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  h1 {
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.5rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-weight: 400;
    text-transform: titlecase;
    color: #fff;
    font-size: clamp(0.8rem, 8vw, 1.7em);
  }
`;

const Button = styled.div`
  background-color: #e7c482;
  border: none;
  border-radius: 0px 10px 8px 10px;
  height: 40px;
  width: 150px;
  color: #fff;
  font-family: Share Tech;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  margin-right: 0.5rem;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = heroData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  return (
    <HeroSection>
      <HeroWrapper>
        {heroData.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.Image} alt="" />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>
                      {slide.page}
                      <br />
                      {slide.page1}
                    </p>
                    <Button
                      to={slide.path}
                      primary="true"
                      css={`
                        max-width: 160px;
                        border-radius: 20px;
                      `}
                    >
                      {slide.label}
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
