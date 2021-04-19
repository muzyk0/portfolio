import React from 'react';
import styles from './Nav.module.css'
import styled from 'styled-components';

const NavStyled = styled.nav`
  border: 1px solid black;
  width: 300px;
  display: flex;
  justify-content: space-between;
`

export const Nav: React.FC = () => {
    return (
        <NavStyled>
            <a href="/">Home</a>
            <a href="/">Skills</a>
            <a href="/">Projects</a>
            <a href="/">Contacts</a>
        </NavStyled>
    )
}
