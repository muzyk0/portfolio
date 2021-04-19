import React from 'react';
import {ProjectType} from '../Portfolio';
import {Link} from '../../common/Button/Link';
import styled from 'styled-components';
import logoProject from '../../logo.svg'

const ProjectStyle = styled.div`
  width: 250px;
  background-color: aliceblue;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 5px;
  padding: 10px;
`
const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: #88f87b url(${logoProject}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const Project: React.FC<ProjectType> = (props) => {
    return (
        <ProjectStyle>
            <ImgWrapper>
                <Link href={'#'}>View</Link>
            </ImgWrapper>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </ProjectStyle>
    );
};

