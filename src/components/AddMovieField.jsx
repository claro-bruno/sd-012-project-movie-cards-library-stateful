import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
class AddMovieField extends React.Component {
  render() {
    const { label, type, name, value, onChange } = this.props;
    const labelId = '-label';
    const doubleDot = ':';
    const input = '-input';
    return (
      <label htmlFor={ name + input } data-testid={ name + input + labelId }>
        { label + doubleDot }
        <input
          type={ type }
          name={ name }
          data-testid={ name + input }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieField;
