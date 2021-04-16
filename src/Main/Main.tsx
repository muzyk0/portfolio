import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../common/Styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>I am Vladislav Muzyka</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={styles.mainPhoto}>Photo</div>
            </div>
        </div>
    );
};
