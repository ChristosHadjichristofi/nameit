import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import styles from './App.module.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestions: []
    }

    userInput = (input) => {
        this.setState({ headerExpanded: !input, suggestions: name(input) });
    };

    render() {
        return (
            <div>
                <Header 
                    headTitle = {this.state.headerText}
                    headerExpanded = {this.state.headerExpanded}
                />
                <SearchBox
                    userInput = {this.userInput}
                />
                <ResultsContainer suggestions = {this.state.suggestions}/> 
            </div>
        );
    }
};

export default App;