import React from 'react';
import movies from '../data';
import InputTag from './Inputs/InputTag';
import MovieCard from './MovieCard';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <section>
        <form data-testid="search-bar-form" action="">
          <InputTag
            searchText="text"
            onSearchTextChange={ this.handleChange }
            // id="searchText"
            // data-testid="text-input"
          />

          {
            movies.filter((movieF) => movieF.title.includes(inputValue))
              .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          }

          {/* <InputTag
            searchText="checkbox"
          /> */}
          {/* <select name="" id=""></select> */}
        </form>
      </section>
    );
  }
}

export default SearchBar;

//   const { searchText,
//   onSearchTextChange,
//   bookmarkedOnly,
//   onBookmarkedChange,
//   selectedGenre,
//   onSelectedGenreChange,
// } = this.props;
