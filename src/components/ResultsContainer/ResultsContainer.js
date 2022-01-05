import React from 'react';
import styles from './ResultsContainer.module.css';

const ResultsContainer = ({ suggestions }) => {
    const suggestionsJSX = suggestions.map(suggestion => {
        return <p key = {suggestion}>{suggestion}</p>
    });


    return (
        <div className={styles.results_container}>
            { suggestionsJSX }
        </div>
    );
};

export default ResultsContainer;