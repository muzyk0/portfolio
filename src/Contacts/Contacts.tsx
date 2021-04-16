import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from '../common/Styles/Container.module.css'
import {Link} from '../common/Button/Link';

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactWrapper}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.contactForm}>
                    <label>email</label>
                    <input type="text"/>

                    <label>email</label>
                    <input type="text"/>

                    <label>Your message</label>
                    <textarea/>

                </form>
                <Link href={'#'}>Submit</Link>
            </div>
        </div>
    )
}