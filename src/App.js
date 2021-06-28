import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    }

    this.handleChanger = this.handleChanger.bind(this);
  }

  handleChanger({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="App">
      <Header />
      <SearchBar onSearchTextChange={ this.handleChanger } searchText={ this.state.searchText }/>
      </div>
    );
  }
}

export default App;
