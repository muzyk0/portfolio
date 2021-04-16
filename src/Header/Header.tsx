import React from 'react';
import {Nav} from '../Nav/Nav';
import styles from './Header.module.css'

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Nav/>
        </div>
    )
}
