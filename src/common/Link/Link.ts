import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  color: #20c997;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;

  &:hover, &:active {
    color: #1baa80;
    text-decoration: none;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`;