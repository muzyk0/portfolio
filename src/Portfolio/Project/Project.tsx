import React from 'react';
import {Link, LinkStyle} from '../../common/Button/Link';
import styled from 'styled-components';
import logoProject from '../../logo.svg'

const ProjectStyle = styled.div`
  width: 450px;
  background-color: aliceblue;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 5px;
`
const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: #88f87b url(${logoProject}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    background-color: black;
    opacity: 0.4;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`
const Title = styled.h3`
  font-size: 16px;
  letter-spacing: 1px;
  margin: 0 0 5px;
`
const Description = styled.div`

`
const LinkBtn = styled(LinkStyle)`
  position: relative;
  z-index: 10;
`
type PropsType = {
    id: number
    image: {
        color: string
        backgroundImage: string
    }
    title: string
    description: string
}

export const Project: React.FC<PropsType> = (props) => {

    return (
        <ProjectStyle>
            <ImgWrapper >
                <Link href={'#'}>View</Link>
            </ImgWrapper>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </ProjectStyle>
    );
};

