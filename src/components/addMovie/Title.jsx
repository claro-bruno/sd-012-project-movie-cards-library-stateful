import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="input-label"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          id="input-label"
          name="title"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Title;

Title.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
