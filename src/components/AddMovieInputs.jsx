import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieInputs extends Component {
  render() {
    const { value, onChange, name, inner, id, type } = this.props;
    return (
      <label data-testid={ `${id}-label` } htmlFor={ `${id}` }>
        {inner}
        <input
          type={ type }
          value={ value }
          data-testid={ `${id}` }
          onChange={ onChange }
          name={ name }
          id={ `${id}` }
        />
      </label>
    );
  }
}

AddMovieInputs.defaultProps = {
  value: undefined,
};

AddMovieInputs.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  inner: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
