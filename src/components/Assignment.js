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
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    text-align: center;
  }
  .Locations {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    text-align: center;
  }
  .FundingGoal {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    text-align: center;
  }
  .TotalFunded {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    text-align: center;
    text-transform: titlecase;
  }
  .Amt1 {
    color: #fff;
    font-family: Laila, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: titlecase;
    line-height: 2.93rem;
    text-align: center;
  }
  .USA {
    color: #fff;
    font-family: Laila, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: titlecase;
    line-height: 2.93rem;
    text-align: center;
  }
  .Amt2 {
    color: #fff;
    font-family: Laila, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: titlecase;
    line-height: 2.93rem;
    text-align: center;
  }
  .Amt3 {
    color: #fff;
    font-family: Laila, sans-serif;
    font-size: 2rem;
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
        <h1 className="USA">100+</h1>
        <h1 className="Locations">Countries Supported</h1>
      </div>

      <div>
        <h1 className="Amt2">$1,5000</h1>
        <h1 className="FundingGoal">Funding Goal</h1>
      </div>

      <div>
        <h1 className="Amt3">5M+</h1>
        <h1 className="TotalFunded">Verified Users</h1>
      </div>
    </Assignmentpage>
  );
};

export default Assignment;
