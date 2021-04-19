import React from 'react';
import styled from 'styled-components';

type PropsType = {
    href?: string
    className?: string
}

const LinkStyle = styled.a`
  text-decoration: none;
  display: inline-block;
  background-color: #fcd65d;
  color: #000;
  padding: 10px 20px;
  border-radius: 2px;
  &:hover {
    background-color: #ffc700;
  }
`

export const Link: React.FC<PropsType> = (props) => {
    return (
        <>
            <LinkStyle href={props.href}>{props.children}</LinkStyle>
        </>
    );
};