import React from 'react';
import PropType from 'prop-types';

class TextArea extends React.Component {
  render() {
    const {
      label,
      inputName,
      inputValue,
      onChangeInput,
      inputID,
    } = this.props;

    return (
      <label htmlFor={ `${inputID}` } data-testid={ `${inputID}-label` }>
        { label }
        <textarea
          name={ inputName }
          value={ inputValue }
          onChange={ onChangeInput }
          data-testid={ inputID }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropType.string.isRequired,
  inputName: PropType.string.isRequired,
  inputValue: PropType.string.isRequired,
  onChangeInput: PropType.func.isRequired,
  inputID: PropType.string.isRequired,
};

export default TextArea;
