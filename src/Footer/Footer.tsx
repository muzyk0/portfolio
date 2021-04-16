import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../common/Styles/Container.module.css'

export const Footer = () => {

    const socialNetwork = [
        {id: 1, title: 'in', link: ''},
        {id: 2, title: 'vk', link: ''},
        {id: 3, title: 'tg', link: ''},
        {id: 5, title: 'fb', link: ''},
    ]

    return (
        <div className={styles.footer}>
            <div className={`${styleContainer.container} ${styles.footerWrapper}`}>
                <a href="#" className={styles.logo}>
                    <h3>Vladislav Muzyka</h3>
                </a>
                    <ul className={styles.socialNetwork}>
                        {socialNetwork.map(link => (<li className={styles.linkSocialNetwork}>{link.title}</li>))}
                    </ul>

                    <p>
                        © 2021 muzyk0, All Rights Reserved.
                    </p>

            </div>
        </div>
    )
}