import React from 'react';
import {StyleContainer} from '../common/Styles/Container';
import styled from 'styled-components';
import {Project} from './Project/Project';
import Title from '../common/Components/Title/Portfolio';

const PortfolioBlock = styled.div`
  padding: 120px 50px;
`
const PortfolioWrapper = styled(StyleContainer)`

  flex-direction: column;
  justify-content: flex-start;
`
const Projects = styled.div`
  width: 100%;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1257px) {
    justify-content: center;
  }
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
                <Title title={'Project'} subTitle={'Web'} description={'All Ready Pre-Built Projects'}/>
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
