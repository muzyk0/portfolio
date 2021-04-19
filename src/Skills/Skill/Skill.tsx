import React from 'react';
import styles from './Skill.module.css'
import {SkillsType} from '../Skills';
import styled from 'styled-components';

const SkillStyle = styled.div`
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

const StyledIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: aqua;
`

export const Skill: React.FC<SkillsType> = (props) => {
    return (
        <SkillStyle>
            <StyledIcon>{props.icon}</StyledIcon>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </SkillStyle>
    );
};

