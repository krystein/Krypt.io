import React from "react";

import styled from "styled-components";
import AnaEduUs from "./Analysis";
import AnaEduUs1 from "./Analy";
import AnaEduUs2 from "./Education";
import AnaEduUs3 from "./Educat";

const Content = styled.div`
  margin-bottom: 20px;
`;

const AnaEdu = () => {
  return (
    <>
      <Content>
        <AnaEduUs />
      </Content>
      <Content>
        <AnaEduUs1 />
      </Content>
      <Content>
        <AnaEduUs2 />
      </Content>
      <Content>
        <AnaEduUs3 />
      </Content>
    </>
  );
};

export default AnaEdu;
