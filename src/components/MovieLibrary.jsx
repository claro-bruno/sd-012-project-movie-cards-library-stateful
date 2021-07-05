// implement MovieLibrary component here
import React from 'react';
import PropType from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <SearchBar movies={ movies } />
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropType.string.isRequired,
};
export default MovieLibrary;
