import React from "react";
import Hero from "./Hero";
import Values from "./Values";
import Section from "./Section";
import styled from "styled-components";
import Img1 from "../img/img2.jpg";
import Assignment from "./Assignment";

const Container = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${Img1});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const Index = () => {
  return (
    <Container>
      <Hero />
      <Values />
      <Section />
      <Assignment />
    </Container>
  );
};

export default Index;
