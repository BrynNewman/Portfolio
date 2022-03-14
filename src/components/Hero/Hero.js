import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My Name is <br />
        Bryn Newman <br />
        And I am a Web Developer
      </SectionTitle>
      <SectionText>
        I want to build and learn as much as I can. 
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/BrynNewman'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;