import React from "react";

import styled from "styled-components";
import AboutUs from "./AboutUs";
import AboutUs1 from "./AboutUs1";
import AboutUs2 from "./AboutUs2";

const Content = styled.div`
  margin-bottom: 20px;
`;

const Index = () => {
  return (
    <>
      <Content>
        <AboutUs />
      </Content>
      <Content>
        <AboutUs1 />
      </Content>
      <Content>
        <AboutUs2 />
      </Content>
    </>
  );
};

export default Index;
