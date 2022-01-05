import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    return (
        <div className={styles.search_container}>
            <input placeholder="Type Keywords" className={styles.search_input}/>            
        </div>
    );
};

export default SearchBox;