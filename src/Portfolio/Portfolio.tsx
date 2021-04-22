import React from 'react';
import {StyleContainer} from '../common/Styles/Container';
import styled from 'styled-components';
import './styles.css'
import { Project } from './Project/Project';

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
  width: 100%;
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


            <PortfolioWrapper>
                <h1>Стоить оставлять код ниже или пока убрать?</h1>
                    <ul className="stage">

                        <li className="scene">
                            <div className="movie">
                                <div className="poster"/>
                                <div className="info">
                                    <header>
                                        <h1>TodoList</h1>
                                        <span className="year">React</span>
                                        <span className="rating">Redux</span>
                                        <span className="duration">Material UI</span>
                                    </header>
                                    <p>
                                        In Bedford Falls, New York on Christmas Eve, George Bailey is deeply troubled.
                                        Prayers for his well-being from friends and family reach Heaven. Clarence
                                        Odbody,
                                        Angel Second Class, is assigned to visit Earth to save George, thereby earning
                                        his
                                        wings. Franklin and Joseph, the head angels, review George's life with Clarence.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="scene">
                            <div className="movie">
                                <div className="poster"/>
                                <div className="info">
                                    <header>
                                        <h1>Vengeance Valley</h1>
                                        <span className="year">React</span>
                                        <span className="rating">Redux</span>
                                        <span className="duration">Material UI</span>
                                    </header>
                                    <p>
                                        A cattle baron takes in an orphaned boy and raises him, causing his own son to
                                        resent the boy. As they get older the resentment festers into hatred, and
                                        eventually
                                        the real son frames his stepbrother for fathering an illegitimate child that is
                                        actually his, seeing it as an opportunity to get his half-brother out of the way
                                        so
                                        he can have his father's empire all to himself.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="scene">
                            <div className="movie">
                                <div className="poster"/>
                                <div className="info">
                                    <header>
                                        <h1>The Gold Rush</h1>
                                        <span className="year">React</span>
                                        <span className="rating">Redux</span>
                                        <span className="duration">Material UI</span>
                                    </header>
                                    <p>
                                        The Tramp travels to the Yukon to take part in the Klondike Gold Rush. He gets
                                        mixed
                                        up with some burly characters and falls in love with the beautiful Georgia. He
                                        tries
                                        to win her heart with his singular charm.
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>
            </PortfolioWrapper>

        </PortfolioBlock>
    );
};
