import React from 'react';
import {Nav} from '../Nav/Nav';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  height: 80px;
  background-color: #6da8ee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <Nav/>
        </HeaderStyled>
    )
}
