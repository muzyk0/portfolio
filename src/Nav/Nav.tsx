import React from 'react';
import styles from './Nav.module.css'

export const Nav: React.FC = () => {
    return (
        <div className={styles.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    )
}
