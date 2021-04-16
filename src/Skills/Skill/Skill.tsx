import React from 'react';
import styles from './Skill.module.css'
import {SkillsType} from '../Skills';

export const Skill: React.FC<SkillsType> = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>{props.icon}</div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

