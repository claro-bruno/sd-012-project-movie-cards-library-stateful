import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './ComponentsAddMovie/InputTitle';
import InputSubtitle from './ComponentsAddMovie/InputSubtitle';
import InputImage from './ComponentsAddMovie/InputImage';
import TextAreaStoryline from './ComponentsAddMovie/TextAreaStoryline';
import InputRating from './ComponentsAddMovie/InputRating';
import SelectGenre from './ComponentsAddMovie/SelectGenre';

const INITIAL_STATE = {
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
    this.handleClick = this.handleClick.bind(this);
    this.resetInitialState = this.resetInitialState.bind(this);

    this.state = INITIAL_STATE;
  }

  handleChange({ target: { name, type, value, checked } }) {
    function newValue() {
      switch (type) {
      case 'checkbox': return checked;
      case 'number': return +value;
      default: return value;
      }
    }
    this.setState((state) => ({ ...state, [name]: newValue() }));
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetInitialState();
  }

  resetInitialState() {
    return this.setState((state) => ({ ...state, INITIAL_STATE }));
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, handleClick } = this;

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
          onClick={ handleClick }
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
