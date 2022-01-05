import React from 'react';
import NameCard from '../NameCard/NameCard';
import styles from './ResultsContainer.module.css';

const ResultsContainer = ({ suggestions }) => {
    const suggestionsJSX = suggestions.map((suggestion, index) => {
        return <NameCard key = {index} name = {suggestion}/>
    });


    return (
        <div className={styles.results_container}>
            { suggestionsJSX }
        </div>
    );
};

export default ResultsContainer;