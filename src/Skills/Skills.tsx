import React from 'react';
import {Skill} from './Skill/Skill';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';
import Title from '../common/Components/Title/Title';
import JavaScripIcon from '../assets/Icon/javascript.svg';
import TypeScriptIcon from '../assets/Icon/typescript.svg';
import ReactIcon from '../assets/Icon/react.svg';
import ReduxIcon from '../assets/Icon/redux.svg';

export type SkillsType = {
    id: number
    icon: string
    title: string
    description: string
}

export const SkillsBlock = styled.section`
  background-color: #343a40;
`
export const SkillsWrapper = styled(StyleContainer)`
  flex-direction: column;
  justify-content: flex-start;
`;
export const SkillsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  @media (min-width: 992px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
`

export const Skills = () => {

    const skills: SkillsType[] = [
        {
            id: 1,
            icon: ReactIcon,
            title: 'React',
            description: 'consectetur adipisicing elit. Architecto, possimus!'
        },
        {
            id: 2,
            icon: ReduxIcon,
            title: 'Redux',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!'
        },
        {
            id: 3,
            icon: JavaScripIcon,
            title: 'JS',
            description: 'consectetur adipisicing elit. Architecto, possimus!'
        },
        {
            id: 4,
            icon: TypeScriptIcon,
            title: 'TypeScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!'
        },
    ]

    return (
        <SkillsBlock>
            <SkillsWrapper>
                <Title title={'Services'} subTitle={'What I Do?'}/>
                <SkillsStyle>
                    {skills.map(skill => <Skill
                            key={skill.id}
                            id={skill.id}
                            title={skill.title}
                            description={skill.description}
                            icon={skill.icon}
                        />
                    )}
                </SkillsStyle>
            </SkillsWrapper>
        </SkillsBlock>
    );
};
