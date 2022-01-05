import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ userInput }) => {
    return (
        <div className={styles.search_container}>
            <input 
                onChange={(event) => userInput(event.target.value)} 
                placeholder="Type Keywords" className={styles.search_input}
            />            
        </div>
    );
};

export default SearchBox;