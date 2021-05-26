import React from 'react';
import styled from 'styled-components';
import {Link} from '../common/Link/Link';

const NavStyled = styled.nav`
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;
const NavLink = styled(Link)`
  color: rgba(250, 250, 250, 0.9);
  height: 70px;
  padding: 0 0.85em;
  
`;
const List = styled(Link)`
  display: flex;
  text-decoration: none;
  list-style: none;
  margin: 0;
`;

export const Nav: React.FC = () => {
    return (
        <NavStyled>

            <List>
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/">About</NavLink>
                </li>
                <li>
                    <NavLink href="/">What I Do</NavLink>
                </li>
                <li>
                    <NavLink href="/">Resume</NavLink>
                </li>
                <li>
                    <NavLink href="/">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink href="/">Contact</NavLink>
                </li>

            </List>
        </NavStyled>
    )
}
