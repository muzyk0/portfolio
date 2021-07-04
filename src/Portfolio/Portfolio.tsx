import React from 'react';
import {StyleContainer} from '../common/Styles/Container';
import styled from 'styled-components';
import {Project} from './Project/Project';
import todoImage from '../assets/images/TodoList.png';
import xCmsImage from '../assets/images/MiniX_CMS.png';
import Title from '../common/Components/Title/Title';

const PortfolioBlock = styled.div`
  padding: 120px 50px;
`
const PortfolioWrapper = styled(StyleContainer)`

  flex-direction: column;
  justify-content: flex-start;
`
const Projects = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  //@media screen and (max-width: 1258px) {
  //  justify-content: center;
  //}
`

export type ProjectType = {
    id: number
    image: {
        backgroundImage: string
    }
    title: string
    description: string
}

export const Portfolio = () => {

    const todolist = {
        backgroundImage: todoImage,
    };
    const xcms = {
        backgroundImage: xCmsImage,
    };

    const projects: ProjectType[] = [
        {
            id: 1,
            image: todolist,
            title: 'React Social Network',
            description: 'consectetur adipisicing elit. Architecto, possimus!',
        },
        {
            id: 2,
            image: xcms,
            title: 'TodoList',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!'
        },
        {
            id: 3,
            image: todolist,
            title: 'X-CMS',
            description: 'consectetur '
        },
        {
            id: 4,
            image: todolist,
            title: 'Market',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, possimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    ]
    return (
        <PortfolioBlock>
            <PortfolioWrapper>
                <Title title={'Portfolio'} subTitle={'My work'} />
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
