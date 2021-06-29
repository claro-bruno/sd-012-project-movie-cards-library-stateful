import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { initValue, onChange } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="label-storyline"
      >
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="10"
          value={ initValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  initValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
