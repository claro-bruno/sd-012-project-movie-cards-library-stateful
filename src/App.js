import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  render() {
    const { searchText } = this.state;

    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly="true"
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
      </div>
    );
  }
}

export default App;
