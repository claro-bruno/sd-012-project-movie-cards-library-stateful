import React, { Component } from 'react';
import PropTypes from 'prop-types';
import inputData from '../InputData';

class InputsAddMovie extends Component {
  render() {
    const { hendleChange, state } = this.props;
    return (
      inputData.map((input) => (
        <label
          htmlFor={ input.inputId }
          data-testid={ input.labelId }
          key={ input.labelId }
        >
          {input.labelTitle}

          <input
            type={ input.inputType }
            data-testid={ input.inputId }
            name={ input.inputValue }
            value={ state[input.inputValue] }
            key={ input.inputId }
            onChange={ hendleChange }
          />
        </label>
      ))
    );
  }
}

InputsAddMovie.propTypes = {
  hendleChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,

};

export default InputsAddMovie;
