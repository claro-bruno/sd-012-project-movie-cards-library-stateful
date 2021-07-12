import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title } = this.props;
    const { handleChange } = this.props;

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
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
