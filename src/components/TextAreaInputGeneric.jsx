import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaInputGeneric extends Component {
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

TextAreaInputGeneric.propTypes = {
  valueTextAreaInput: PropTypes.string.isRequired,
  handleChangeTextArea: PropTypes.func.isRequired,
};

export default TextAreaInputGeneric;
