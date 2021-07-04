import React from 'react';
import {Nav} from '../Nav/Nav';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  transition: all 0.5s ease;
  background-color: #111;
  box-shadow: 0 0 10px rgba(250, 250, 250, 0.03);
  border-bottom: none;
`

export const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <Nav/>
        </HeaderStyled>
    )
}
