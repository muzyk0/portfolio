import React from 'react';
import styles from './Button.module.css'

type PropsType = {
    href?: string
    className?: string
}

export const Link: React.FC<PropsType> = (props) => {
    return (
        <>
            <a href={props.href} className={`${props.className ? props.className : styles.link}`}>{props.children}</a>
        </>
    );
};