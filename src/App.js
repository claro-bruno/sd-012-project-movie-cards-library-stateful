import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          onSearchTextChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;
