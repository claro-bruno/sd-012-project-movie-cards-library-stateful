import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import movies from './data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.searchTextChange = this.searchTextChange.bind(props);
    this.bookmarkedChange = this.bookmarkedChange.bind(props);
    this.selectedGenreChange = this.selectedGenreChange.bind(props);
  }

  render() {
    const searchTextChange = () => {
    };
    const bookmarkedChange = () => {
    };
    const selectedGenreChange = () => {
    };
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText=""
          onSearchTextChange={ searchTextChange }
          bookmarkedOnly
          onBookmarkedChange={ bookmarkedChange }
          selectedGenre=""
          onSelectedGenreChange={ selectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie
          onClick={ handleClick }
        />
      </div>
    );
  }
}

export default App;
