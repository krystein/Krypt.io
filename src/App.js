import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Values from "./components/Values";
import GlobalStyle from "./globalstyles";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from "./components/Footer";
import Section from "./components/Section";
import styled from "styled-components";
import img1 from "./img/img2.jpg";
import Assignment from "./components/Assignment";

const Container = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${img1});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Values />
      <Section />
      <AnimationOnScroll animateIn="bounceIn">
        <Assignment />
      </AnimationOnScroll>
      <Footer />
    </Container>
  );
}

export default App;
