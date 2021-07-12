import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { storyline } = this.props;
    const { handleChange } = this.props;

    return (
      <label
        htmlFor="subtitle-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <input
          type="text"
          id="storyline-input"
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default TextArea;

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
