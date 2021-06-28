import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Textarea extends Component {
  render() {
    const { storyline } = this.props;
    return (
      <div>
        <label
          htmlFor="storyline-input"
          defaultValue={ storyline }
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
};
