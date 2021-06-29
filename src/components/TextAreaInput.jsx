import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaInput extends Component {
  render() {
    const { valueTextAreaInput, handleChangeTextArea } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ valueTextAreaInput }
          data-testid="storyline-input"
          onChange={ handleChangeTextArea }
        />
      </label>
    );
  }
}

TextAreaInput.propTypes = {
  valueTextAreaInput: PropTypes.func.isRequired,
  handleChangeTextArea: PropTypes.func.isRequired,
};

export default TextAreaInput;
