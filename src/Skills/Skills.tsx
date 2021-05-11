import React from 'react';
import {Skill} from './Skill/Skill';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';
import TitleOld from '../common/Components/Title/TitleOld';

export type SkillsType = {
    id: number
    icon: string
    title: string
    description: string
}

export const SkillsBlock = styled.div`
  background-color: #bcf5b4;
`
export const SkillsWrapper = styled(StyleContainer)`
  flex-direction: column;
  justify-content: flex-start;
`
export const SkillsStyle = styled.div`
  width: 100%;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Skills = () => {

    const skills: SkillsType[] = [
        {
            id: 1,
            icon: '',
            title: 'React',
            description: 'consectetur adipisicing elit. Architecto, possimus!'
        },
        {
            id: 2,
            icon: '',
            title: 'Redux',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!'
        },
        {
            id: 3,
            icon: '',
            title: 'JS',
            description: 'consectetur adipisicing elit. Architecto, possimus!'
        },
        {
            id: 4,
            icon: '',
            title: 'TypeScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!'
        },
    ]

    return (
        <SkillsBlock>
            <SkillsWrapper>
                <TitleOld subTitle={'My'} title={'Skills'}/>
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
