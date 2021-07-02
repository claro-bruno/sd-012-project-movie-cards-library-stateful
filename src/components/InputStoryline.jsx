import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputStoryline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
