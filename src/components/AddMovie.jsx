import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './Subtitleinput';
import ImageInput from './ImageInput';
import StorylineInput from './storylineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';
import ButtonInput from './ButtonInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, handleButton } = this;
    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } handleChange={ handleChange } />
        <SubtitleInput subtitle={ subtitle } handleChange={ handleChange } />
        <ImageInput imagePath={ imagePath } handleChange={ handleChange } />
        <StorylineInput storyline={ storyline } handleChange={ handleChange } />
        <RatingInput rating={ rating } handleChange={ handleChange } />
        <GenreInput genre={ genre } handleChange={ handleChange } />
        <ButtonInput handleButton={ handleButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
