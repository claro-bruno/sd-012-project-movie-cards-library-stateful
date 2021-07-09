import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './AddMovieComponents/TitleInput';
import SubtitleInput from './AddMovieComponents/SubtitleInput';
import ImageInput from './AddMovieComponents/ImageInput';
import StorylineInput from './AddMovieComponents/StorylineInput';
import RatingInput from './AddMovieComponents/RatingInput';
import GenreInput from './AddMovieComponents/GenreInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  clickButton() {
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

  updateState(event) {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { updateState } = this;
    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } updateState={ updateState } />
        <SubtitleInput subtitle={ subtitle } updateState={ updateState } />
        <ImageInput imagePath={ imagePath } updateState={ updateState } />
        <StorylineInput storyline={ storyline } updateState={ updateState } />
        <RatingInput rating={ rating } updateState={ updateState } />
        <GenreInput genre={ genre } updateState={ updateState } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.clickButton }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
