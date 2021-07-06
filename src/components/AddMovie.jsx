import React from 'react';
import PropTypes from 'prop-types';

import InputText from './myComponents/inputAddMovie/InputText';
import InputTextSubtitle from './myComponents/inputAddMovie/InputTextSubtitle';
import InputTextImage from './myComponents/inputAddMovie/InputTextImage';
import InputTextAreaSin from './myComponents/inputAddMovie/InputTextAreaSin';
import InputNumberRat from './myComponents/inputAddMovie/InputNumberRat';
import InputSelectGen from './myComponents/inputAddMovie/InputSelectGen';
import InputButton from './myComponents/inputAddMovie/InputButton';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  submitChanges() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputText value={ title } onChange={ this.handleChange } />
        <InputTextSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputTextImage value={ imagePath } onChange={ this.handleChange } />
        <InputTextAreaSin value={ storyline } onChange={ this.handleChange } />
        <InputNumberRat value={ rating } onChange={ this.handleChange } />
        <InputSelectGen value={ genre } onChange={ this.handleChange } />
        <InputButton onClick={ this.submitChanges } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
