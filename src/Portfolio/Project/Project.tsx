import React from 'react';
import {Link} from '../../common/Button/Link';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  position: relative;
  width: 100%;

  background-color: #111418;
  border-radius: .25rem;
  color: #dee3e4;
  margin: 1rem;
  
  @media (min-width: 949px) {
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }
`

interface IPropsIcon {
    backgroundImage: string
}
const ImgWrapper = styled.div<IPropsIcon>`
  height: 300px;
  background: #88f87b url("${props => props.backgroundImage}") no-repeat center;
  background-size: cover;
  border-radius: .25rem .25rem 0 0;
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

const Description = styled.div`
  padding: 1.5rem 1rem 1rem;
`

type PropsType = {
    id: number
    image: {
        backgroundImage: string
    }
    title: string
    description: string
}

export const Project: React.FC<PropsType> = (props) => {

    return (
        <ProjectWrapper>
            <ImgWrapper backgroundImage={props.image.backgroundImage}>
                <Link href={'#'}>View</Link>
            </ImgWrapper>

            <Description>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </Description>
        </ProjectWrapper>
    );
};

