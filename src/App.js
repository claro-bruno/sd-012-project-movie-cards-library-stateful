import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarked: false,
      selectedGenre: '',
      movies: [],
    };
    this.titleInputCallBack = this.titleInputCallBack.bind(this);
    this.bookmarkCallBack = this.bookmarkCallBack.bind(this);
    this.selectGenreCallBack = this.selectGenreCallBack.bind(this);
    this.MovieCallBack = this.MovieCallBack.bind(this);
  }

  titleInputCallBack(event) {
    this.setState({ searchText: event.target.value });
  }

  bookmarkCallBack(event) {
    this.setState({ bookmarked: event.target.value });
  }

  selectGenreCallBack(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  MovieCallBack(newMovie) {
    console.log(newMovie);
    const { movies } = this.state;
    movies.push(newMovie);
  }

  render() {
    const { searchText, selectedGenre, bookmarked, movies } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.titleInputCallBack }
          bookmarkedOnly={ bookmarked }
          onBookmarkedChange={ this.bookmarkCallBack }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectGenreCallBack }
        />
        <AddMovie
          callback={ this.MovieCallBack }
        />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;
