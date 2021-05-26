import React from 'react';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';
import myPhoto from '../assets/images/MyPhoto.jpg'
import {Button} from '../common/Button/Button';
import ScrollBtn from '../common/Button/Scroll';

const MainBlock = styled.div`
  height: 100vh;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`
const MainWrapper = styled(StyleContainer)`
  padding-bottom: 1.5rem;
  @media screen and (max-width: 895px) {
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`
const DescriptionText = styled.div`
  flex: 1 1 400px;
  max-width: 550px;
  text-align: center;
`
const MainPhoto = styled.div`
  width: 300px;
  height: 400px;
  background: #212529 url(${myPhoto}) center no-repeat;
  background-size: cover;

`
const WelcomeText = styled.div`
  font-size: 1.75rem;
  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`
const Title = styled.h1`
  font-weight: 600;
  line-height: 1.3;
  font-size: 3rem
`
const Buttons = styled.div`

  text-align: center;
`

export const Main = () => {
    return (
        <MainBlock>
            <MainWrapper justify={'space-between'} align={'center'}>
                <DescriptionText>
                    <WelcomeText>Welcome</WelcomeText>
                    <Title>I am Vladislav Muzyka</Title>
                    <p>A Frontend Developer</p>

                </DescriptionText>
                <MainPhoto/>
            </MainWrapper>
            <Buttons>
                <Button variant={1}>Hire Me</Button>
                <ScrollBtn/>
            </Buttons>
        </MainBlock>
    );
};
