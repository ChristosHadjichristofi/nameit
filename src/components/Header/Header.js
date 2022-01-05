import React from 'react';
import styles from './Header.module.css';

const Header = ({ headTitle }) => {
    return (
        <div className={styles.header_container}>

            <img 
                src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png' 
                className={styles.header_img} 
                alt="headerImage">
            </img>
            <h1 className={styles.header_text}>{headTitle}</h1>
        </div>
    );
};

export default Header;