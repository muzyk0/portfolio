import React from 'react';
import {Project} from './Skill/Project';
import {StyleContainer} from '../common/Styles/Container';
import styled from 'styled-components';

const PortfolioBlock = styled.div`
  background-color: #e076ef;
`
const PortfolioWrapper = styled(StyleContainer)`
  flex-direction: column;
  justify-content: flex-start;
`
const Title = styled.h2`
  justify-content: flex-start;
`
const Projects = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export type ProjectType = {
    id: number
    image: string
    title: string
    description: string
}

export const Portfolio = () => {

    const projects: ProjectType[] = [
        {
            id: 1,
            image: '',
            title: 'React Social Network',
            description: 'consectetur adipisicing elit. Architecto, possimus!'
        },
        {
            id: 2,
            image: '',
            title: 'TodoList',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!'
        },
        {
            id: 3,
            image: '',
            title: 'X-CMS',
            description: 'consectetur '
        },
        {
            id: 4,
            image: '',
            title: 'Market',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!'
        },
    ]

    return (
        <PortfolioBlock>
            <PortfolioWrapper>
                <Title>Projects</Title>
                <Projects>
                    {projects.map(p => <Project
                        key={p.id}
                        id={p.id}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        />
                    )}
                </Projects>
            </PortfolioWrapper>
        </PortfolioBlock>
    );
};
