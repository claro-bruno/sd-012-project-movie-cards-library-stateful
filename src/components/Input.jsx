import React from 'react';

class Input extends React.Component {
  render() {
    const { props } = this;
    const {
      labelDataTestId,
      inputLabel,
      inputDataTestId,
      inputValue,
      inputOnChange,
    } = props;
    return(
      <label data-testid={ labelDataTestId }>
        { inputLabel }
        <input 
        data-testid={ inputDataTestId }
        value={ inputValue }
        onChange={ inputOnChange }
        />
      </label>
    );
  }
}

export default Input;