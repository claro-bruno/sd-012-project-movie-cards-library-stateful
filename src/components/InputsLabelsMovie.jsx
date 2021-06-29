import React from 'react';
import inputsLabels from '../dataInputsAndLabels';

class InputsLabelsMovie extends React.Component {
  render() {
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
            />
          </label>),
      ));
  }
}

export default InputsLabelsMovie;
