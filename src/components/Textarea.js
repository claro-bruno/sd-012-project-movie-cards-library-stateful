import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Textarea extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <div>
        <label
          htmlFor="storyline-input"
          defaultValue={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea data-testid="storyline-input" />
        </label>
      </div>
    );
  }
}

Textarea.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
