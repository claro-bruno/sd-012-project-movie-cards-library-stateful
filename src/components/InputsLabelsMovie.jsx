import React from 'react';
import PropTypes from 'prop-types';
import inputsLabels from '../dataInputsAndLabels';

class InputsLabelsMovie extends React.Component {
  render() {
    const { handlerChange, state } = this.props;
    return (
      inputsLabels.map(
        (inputLabel) => (
          <label
            htmlFor={ inputLabel.idInput }
            data-testid={ inputLabel.idLabel }
            key={ inputLabel.idLabel }
          >
            { inputLabel.labelContent }
            <input
              data-testid={ inputLabel.idInput }
              key={ inputLabel.idInput }
              name={ inputLabel.inputName }
              type={ inputLabel.inputType }
              value={ state[inputLabel.inputName] }
              onChange={ handlerChange }
            />
          </label>),
      ));
  }
}

InputsLabelsMovie.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default InputsLabelsMovie;
