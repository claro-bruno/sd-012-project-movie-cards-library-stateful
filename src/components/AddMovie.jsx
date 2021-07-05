// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitletInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePathInput from './ImagePathInput';
import SinopseInput from './SinopseInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSinopseChange = this.handleSinopseChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.onClickFunc = this.onClickFunc.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubtitleChange(e) {
    this.setState({ subtitle: e.target.value });
  }

  handleImageChange(e) {
    this.setState({ imagePath: e.target.value });
  }

  handleSinopseChange(e) {
    this.setState({ storyline: e.target.value });
  }

  handleRatingChange(e) {
    this.setState({ rating: e.target.value });
  }

  handleGenreChange(e) {
    this.setState({ genre: e.target.value });
  }

  onClickFunc(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick();
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitletInput title={ title } method={ this.handleTitleChange } />
          <SubtitleInput subtitle={ subtitle } method={ this.handleSubtitleChange } />
          <ImagePathInput imagePath={ imagePath } method={ this.handleImageChange } />
          <SinopseInput sinopse={ storyline } method={ this.handleSinopseChange } />
          <RatingInput rating={ rating } method={ this.handleRatingChange } />
          <GenreInput genre={ genre } method={ this.handleGenreChange } />
          <button
            id="add-movie"
            type="submit"
            data-testid="send-button"
            onClick={ this.onClickFunc }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
