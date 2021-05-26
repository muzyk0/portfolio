import React from 'react';
import styled from 'styled-components';


const SkillWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
`
const SkillStyle = styled.div`
  position: relative;
  padding-left: 90px;
  margin-bottom: 3rem;
`
const StyledIcon = styled.div`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  border-radius: 5px;

  position: absolute;
  top: 0;
  left: 0;

  font-size: 50px;
  color: #20c997;
`
interface IPropsIcon {
    icon?: string
}
const Icon = styled.div<IPropsIcon>`
  background: url("${props => props.icon}") no-repeat center;
  width: 50px;
  height: 50px;
  
`
type Props = {
    id: number
    icon: string
    title: string
    description: string
}

export const Skill: React.FC<Props> = (props) => {

    return (
        <SkillWrapper>
            <SkillStyle>
                <StyledIcon>
                    <Icon icon={props.icon}/>
                </StyledIcon>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </SkillStyle>
        </SkillWrapper>
    );
};

