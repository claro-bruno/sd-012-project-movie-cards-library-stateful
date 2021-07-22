import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StorylineInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="Sinopse">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
