import React from 'react';
import styled from 'styled-components';


const ExperienceItem = styled.div`
  padding: 20px 25px;
  position: relative;
  flex: 0 0 50%;
  max-width: 50%;
  @media (min-width: 768px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
  &:before {
    content: '';
    position: absolute;
    border-left: 1px dotted rgba(250, 250, 250, 0.15);
    height: 100%;
    top: 0;
    left: -1px;
  }
  &:after {
    content: '';
    position: absolute;
    border-bottom: 1px dotted rgba(250, 250, 250, 0.15);
  width: 100%;
    height: 0;
    top: auto;
    left: 0;
    bottom: -1px;
  }
`
const Featured = styled.div`
  text-align: center;
  line-height: 1.3;
  font-weight: 400;
  color: rgba(255,255,255,.5);
  @media (max-width: 1200px) {
  .text-12 {
    font-size: calc(1.425rem + 2.1vw);
  }
}
`
const H4 = styled.div`
  font-size: 3rem;
`
const FeaturedText = styled.div`
  color: #dee3e4;
`

const ExperienceItemBox = () => {
    return (
        <ExperienceItem >
            <Featured >
                <H4><span>10</span>+</H4>
                <FeaturedText>Years Experience</FeaturedText>
            </Featured>
        </ExperienceItem>
    )
}
export default ExperienceItemBox