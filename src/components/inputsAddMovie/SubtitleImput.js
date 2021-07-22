import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubtitleInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="Subtítulo">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
