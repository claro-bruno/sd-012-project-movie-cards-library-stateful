import React from 'react';
import PropTypes from 'prop-types';
import GenreMovie from './addMovieComponents/GenreMovie';
import ImageMovie from './addMovieComponents/ImageMovie';
import RatingMovie from './addMovieComponents/RatingMovie';
import SinopseMovie from './addMovieComponents/SinopseMovie';
import SubtitleMovie from './addMovieComponents/SubtitleMovie';
import TitleMovie from './addMovieComponents/TitleMovie';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleMovie title={ title } onTitleChange={ this.handleChange } />
        <SubtitleMovie subtitle={ subtitle } onSubChange={ this.handleChange } />
        <ImageMovie imagePath={ imagePath } onImgChange={ this.handleChange } />
        <SinopseMovie storyline={ storyline } onSinChange={ this.handleChange } />
        <RatingMovie rating={ rating } onRatChange={ this.handleChange } />
        <GenreMovie genre={ genre } onGenreChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>

    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
