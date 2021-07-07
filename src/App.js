import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(state) {
    console.log(state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

export default App;
