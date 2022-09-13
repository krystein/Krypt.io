import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 10px 70px;
  margin: 0px 30px;
  background-color: #e7c482;
  @media Screen and (max-width: 1200px) {
    padding: 20px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;
const Aboutsection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const AboutH = styled.div`
  color: #143a5a;
  font-family: Laila, sans-serif;
  font-size: clamp(0.8rem, 8vw, 1.5rem);
  font-weight: 700;
  text-transform: titlecase;
  line-height: 2.5rem;
  padding-top: 20px;
`;
const AboutP = styled.div`
  color: #979797;
  font-family: Inter, sans-serif;
  font-size: clamp(0.7rem, 8vw, 1em);
  font-weight: 500;
  line-height: 2rem;
`;
const AboutContent = styled.div``;
const AboutH2 = styled.div`
  padding: 20px;
  color: #143a5a;
  font-family: Laila, sans-serif;
  font-size: clamp(1rem, 8vw, 2.5rem);
  font-weight: 700;
  text-transform: titlecase;
  line-height: 2rem;
`;

const AboutUs2 = () => {
  return (
    <AboutContainer>
      <AboutH2>Industry-leading security from day one</AboutH2>
      <Aboutsection>
        <AboutContent>
          <AboutH>Safety, security and compliance</AboutH>
          <AboutP>
            Krypt.io is a licensed New York trust company that undergoes regular
            bank exams and is subject to the cybersecurity audits conducted by
            the New York Department of Financial Services. Learn about our
            commitment to security.
          </AboutP>
        </AboutContent>
        <AboutContent>
          <AboutH>SOC Certifications</AboutH>
          <AboutP>
            Krypt.io is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the
            world’s first cryptocurrency exchange and custodian to complete
            these exams.
          </AboutP>
        </AboutContent>
        <AboutContent>
          <AboutH>Hardware security keys</AboutH>
          <AboutP>
            With Krypt.io you can secure your account with a hardware security
            key via WebAuthn.
          </AboutP>
        </AboutContent>
        <AboutContent>
          <AboutH>Insurance coverage</AboutH>
          <AboutP>
            We maintain insurance against certain types of crypto losses from
            our exchange wallet and from Krypt.io Custody®. To learn more about
            our insurance, and what it does and does not cover, please visit our
            User Agreement.
          </AboutP>
        </AboutContent>
      </Aboutsection>
    </AboutContainer>
  );
};

export default AboutUs2;
