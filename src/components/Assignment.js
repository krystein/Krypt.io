import React from "react";
import styled from "styled-components";

const Assignmentpage = styled.div`
  margin-top: 20px;
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  background-color: #e7c482;
  @media Screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  @media Screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin: 30px 0px;
  }
  @media Screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  div {
    width: 100%;
    padding: 40px;
    @media Screen and (max-width: 1200px) {
      width: 100%;
    }
  }
  .ProjectGoal {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: clamp(0.8rem, 6vw, 1.3em);
    font-weight: 500;
    line-height: 2rem;
    text-align: center;
  }
  .Amt1 {
    color: #fff;
    font-family: Laila, sans-serif;
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 700;
    text-transform: titlecase;
    line-height: 2.93rem;
    text-align: center;
  }
`;

const Assignment = () => {
  return (
    <Assignmentpage>
      <div>
        <h1 className="Amt1">$1,000,000</h1>
        <h1 className="ProjectGoal">Quaterly Volume Traded</h1>
      </div>
      <div>
        <h1 className="Amt1">100+</h1>
        <h1 className="ProjectGoal">Countries Supported</h1>
      </div>

      <div>
        <h1 className="Amt1">$1,500</h1>
        <h1 className="ProjectGoal">Funding Goal</h1>
      </div>

      <div>
        <h1 className="Amt1">5M+</h1>
        <h1 className="ProjectGoal">Verified Users</h1>
      </div>
    </Assignmentpage>
  );
};

export default Assignment;
