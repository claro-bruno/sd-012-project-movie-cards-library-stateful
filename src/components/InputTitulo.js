import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTitulo extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            defaultValue={ title }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
InputTitulo.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
