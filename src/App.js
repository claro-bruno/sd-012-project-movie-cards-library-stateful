import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  getMovies() {
    const { movies } = this.state
    this.setState({
      movies: ...movies
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText=""
          onSearchTextChange=""
          bookmarkedOnly=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenre=""
        />
        <AddMovie onClick={ this.getMovies } />
      </div>
    );
  }
}

export default App;
