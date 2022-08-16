import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalstyles";
import Footer from "./components/Footer";
import styled from "styled-components";
import img1 from "./img/img2.jpg";
import About from "./Pages/AboutUs";
import Index from "./components";
import Openaccount from "./Pages/Openaccount";
import Login from "./Pages/Login";

const Container = styled.div`
  padding-top: 60px;
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
    <BrowserRouter>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Container>
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Openaccount" element={<Openaccount />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
