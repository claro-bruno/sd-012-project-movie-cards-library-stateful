import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      onlyFavorites: false,
      genre: '',
    };

    this.handleChanger = this.handleChanger.bind(this);
  }

  handleChanger({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, onlyFavorites, genre } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          onSearchTextChange={ this.handleChanger }
          searchText={ searchText }
          onBookmarkedChange={ this.handleChanger }
          onSelectedGenreChange={ this.handleChanger }
          bookmarkedOnly={ onlyFavorites }
          selectedGenre={ genre }
        />
      </div>
    );
  }
}

export default App;
