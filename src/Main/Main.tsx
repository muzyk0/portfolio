import React from 'react';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';

const MainBlock = styled.div`
  height: 100vh;
  background-color: #ffc6ce;
`
const DescriptionText = styled.div`
  width: 350px;
  background-color: grey;
`
const MainPhoto = styled.div`
  width: 300px;
  height: 400px;
  background-color: grey;
`


export const Main = () => {
    return (
        <MainBlock>
            <StyleContainer justify={'space-between'} align={'center'}>
                <DescriptionText>
                    <span>Hi there</span>
                    <h1>I am Vladislav Muzyka</h1>
                    <p>A Frontend Developer</p>
                </DescriptionText>
                <MainPhoto>Photo</MainPhoto>
            </StyleContainer>
        </MainBlock>
    );
};
