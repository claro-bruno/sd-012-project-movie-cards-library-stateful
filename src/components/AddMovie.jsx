import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './elements_addMovie/TitleInput';
import SubTitleInput from './elements_addMovie/SubTitleInput';
import ImageInput from './elements_addMovie/ImageInput';
import StoryLineInput from './elements_addMovie/StoryLineInput';
import RatingInput from './elements_addMovie/RatingInput';
import GenreInput from './elements_addMovie/GenreInput';
import SendButton from './elements_addMovie/SendButton';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  };

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput
          value={ title }
          onChange={ this.handleChange }
        />

        <SubTitleInput
          value={ subtitle }
          onChange={ this.handleChange }
        />

        <ImageInput
          value={ imagePath }
          onChange={ this.handleChange }
        />

        <StoryLineInput
          value={ storyline }
          onChange={ this.handleChange }
        />

        <RatingInput
          value={ rating }
          onChange={ this.handleChange }
        />

        <GenreInput
          value={ genre }
          onChange={ this.handleChange }
        />

        <SendButton
          onClick={ (e) => this.handleSubmit(e, onClick) }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
