import React from 'react';
import styles from './NameCard.module.css';

const nameCheapUrl = "https://www.namecheap.com/domains/registration/results?domain=";

const NameCard = ({ name }) => {
    return (
        <a target="_blank" rel="noreferrer" className={styles.card_link} href = { nameCheapUrl + name}>
            <div className={styles.result_name_card}>
                <p className={styles.result_name}>{name}</p>            
            </div>
        </a>
    );
};

export default NameCard;