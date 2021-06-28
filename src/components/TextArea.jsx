import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="movie-storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
