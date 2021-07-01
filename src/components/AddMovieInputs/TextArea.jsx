import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="textArea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="textArea"
          cols="30"
          rows="3"
          data-testid="storyline-input"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
