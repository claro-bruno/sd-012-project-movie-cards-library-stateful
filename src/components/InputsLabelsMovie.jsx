import React from 'react';
import inputsLabels from '../inputsAndLabels';

class InputsLabelsMovie extends React.Component {
  render() {
    return (
      inputsLabels.map((inputLabel) =>  
        <label data-testid={inputLabel.idLabel}>
          {inputLabel.labelContent}
          <input data-testid={inputLabel.idInput} name={inputLabel.inputName} type={inputLabel.inputType} />
        </label>
      )      
    );
  }
}

export default InputsLabelsMovie;