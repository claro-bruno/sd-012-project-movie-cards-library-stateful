import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddStory extends Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
          name={ name }
          id="storyline-input"
        />
      </label>
    );
  }
}

AddStory.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
