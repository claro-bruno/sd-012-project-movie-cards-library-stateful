import React from 'react';
// import PropTypes from 'prop-types';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      // movies: props.movies,
      // - `movies`: a lista de filmes passadas pela props `movies`.
    };
  }

  render() {
    const onClick = (objeto) => console.log(objeto);
    // const movies = (objeto) => objeto;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        {/* <MovieList movies={ movies } /> */}
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.object,
//   ).isRequired,
// };

export default MovieLibrary;
