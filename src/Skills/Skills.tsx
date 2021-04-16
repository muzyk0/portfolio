import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/Styles/Container.module.css'
import {Skill} from './Skill/Skill';

export type SkillsType = {
    id: number
    icon: string
    title: string
    description: string
}

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
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    {skills.map(skill => <Skill
                            key={skill.id}
                            id={skill.id}
                            title={skill.title}
                            description={skill.description}
                            icon={skill.icon}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
