import React from 'react';
import styles from './Portfolio.module.css'
import styleContainer from '../common/Styles/Container.module.css'
import {Project} from './Skill/Project';

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
        <div className={styles.portfolioWrapper}>
            <div className={`${styleContainer.container} ${styles.projectContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    {projects.map(p => <Project
                        key={p.id}
                        id={p.id}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
