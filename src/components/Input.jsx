import React from 'react';

class Input extends React.Component {
  render() {
    const {
      inputType,
      inputLabelName,
      inputName,
      inputValue,
      handleChange,
      id,
    } = this.props;

    if (inputType === 'textarea') {
      return (
        <label htmlFor={ inputName } data-testid={ `${id}-input-label` }>
          { inputLabelName }
          <textarea
            name={ inputName }
            value={ inputValue }
            onChange={ handleChange }
            data-testid={ `${id}-input` }
          />
        </label>
      );
    }
    return (
      <label htmlFor={ inputType } data-testid={ `${id}-input-label` }>
        { inputLabelName }
        <input
          type={ inputType }
          name={ inputName }
          value={ inputValue }
          onChange={ handleChange }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

export default Input;
