import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My name is <br />
        Bryn Newman <br />I am a Quality Assurance Engineer
      </SectionTitle>
      <SectionText>
        I want to build and learn as much as I can, While also <br />
        testing and providing the best quality software I can.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/BrynNewman")}
      >
        Learn More from Github
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
