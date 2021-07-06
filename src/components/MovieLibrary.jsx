import react from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
      </div>
        );
    }
}

MovieLibrary.propTypes = {
    movies: PropTypes.shape({
      imagePath: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
    }).isRequired,
  };
export default MovieLibrary;