import React from 'react';
import PropTypes from 'prop-types';
import AddMovieSubtitle from './AddMovieComponents/AddMovieSubtitle';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';
import AddMovieImg from './AddMovieComponents/AddMovieImg';
import AddMovieStoryLine from './AddMovieComponents/AddMovieStoryLine';
import AddMovieRating from './AddMovieComponents/AddMovieRating';
import AddMovieGenre from './AddMovieComponents/AddMovieGenre';
import AddMovieButton from './AddMovieComponents/AddMovieButton';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle
          title={ title }
          onTitleTextChange={ this.handleChange }
        />

        <AddMovieSubtitle
          subtitle={ subtitle }
          onSubtitleTextChange={ this.handleChange }
        />

        <AddMovieImg
          image={ imagePath }
          onImageTextChange={ this.handleChange }
        />

        <AddMovieStoryLine
          story={ storyline }
          onStoryTextChange={ this.handleChange }
        />

        <AddMovieRating
          rating={ rating }
          onRatingNumberChange={ this.handleChange }
        />

        <AddMovieGenre
          genre={ genre }
          onGenreChange={ this.handleChange }
        />

        <AddMovieButton funcOnClick={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
