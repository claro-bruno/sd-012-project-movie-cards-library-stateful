import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaStoryline extends Component {
  render() {
    const { onChange, value } = this.props;
    return (

      <label
        htmlFor="add-storyline"
        data-testid="storyline-input-label"
      >

        Sinopse

        <textarea
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
        />

      </label>
    );
  }
}

TextAreaStoryline.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextAreaStoryLine;
