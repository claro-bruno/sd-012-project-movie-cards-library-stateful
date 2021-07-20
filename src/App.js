import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarked: false,
      selectedGenre: '',
      movie: [],
    };
    this.titleInputCallBack = this.titleInputCallBack.bind(this);
    this.bookmarkCallBack = this.bookmarkCallBack.bind(this);
    this.selectGenreCallBack = this.selectGenreCallBack.bind(this);
    this.newMovieCallBack = this.newMovieCallBack.bind(this);
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

  newMovieCallBack(movie) {
    this.setState({ movie });
  }

  render() {
    const { searchText, selectedGenre, bookmarked } = this.state;
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
          callback={ this.newMovieCallBack }
        />
      </div>
    );
  }
}

export default App;
