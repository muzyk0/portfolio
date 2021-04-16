import React from 'react';
import styles from './Project.module.css'
import {ProjectType} from '../Portfolio';
import {Link} from '../../common/Button/Link';

export const Project: React.FC<ProjectType> = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgWrapper}>
                <Link href={'#'}>View</Link>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

