import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './ComponentsAddMovie/InputTitle';
import InputSubtitle from './ComponentsAddMovie/InputSubtitle';
import InputImage from './ComponentsAddMovie/InputImage';
import TextAreaStoryline from './ComponentsAddMovie/TextAreaStoryline';
import InputRating from './ComponentsAddMovie/InputRating';
import SelectGenre from './ComponentsAddMovie/SelectGenre';

const stateDefault = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = stateDefault;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClear(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateDefault);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, handleClear } = this;

    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } handleChange={ handleChange } />
        <InputSubtitle subtitle={ subtitle } handleChange={ handleChange } />
        <InputImage imagePath={ imagePath } handleChange={ handleChange } />
        <TextAreaStoryline storyline={ storyline } handleChange={ handleChange } />
        <InputRating rating={ rating } handleChange={ handleChange } />
        <SelectGenre genre={ genre } handleChange={ handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ handleClear }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
