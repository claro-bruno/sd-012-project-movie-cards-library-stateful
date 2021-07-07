import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };

    this.newMovieInfo = this.newMovieInfo.bind(this);
    this.submitNewMovie = this.submitNewMovie.bind(this);
  }

  newMovieInfo(e) {
    const { name, value } = e.target;
    return this.setState({ [name]: value });
  }

  submitNewMovie(e, state) {
    e.preventDefault();
    state = this.state;
    const { onClick } = this.props;
    onClick(state);

    return (
      this.setState({
        title: '',
        subtitle: '',
        storyline: '',
        rating: 0,
        imagePath: '',
        genre: 'action',
      })
    );
  }

  render() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form" onSubmit={ this.submitNewMovie }>
        <TitleInput value={ title } onChange={ this.newMovieInfo } />
        <SubtitleInput value={ subtitle } onChange={ this.newMovieInfo } />
        <ImageInput value={ imagePath } onChange={ this.newMovieInfo } />
        <StorylineInput value={ storyline } onChange={ this.newMovieInfo } />
        <RatingInput value={ rating } onChange={ this.newMovieInfo } />
        <GenreInput value={ genre } onChange={ this.newMovieInfo } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.submitNewMovie }
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
