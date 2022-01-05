import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        headerText: "Name It!",
        headerExpanded: true,
    }

    userInput = (input) => {
        this.setState({ headerExpanded: !input });
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
            </div>
        );
    }
};

export default App;