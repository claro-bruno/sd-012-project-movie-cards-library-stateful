import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
class AddMovieField extends React.Component {
  render() {
    const { label, id, type, name, value, onChange } = this.props;
    const labelId = '-label';
    const doubleDot = ':';
    return (
      <label htmlFor={ id } data-testid={ id + labelId }>
        { label + doubleDot }
        <input
          type={ type }
          name={ name }
          data-testid={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieField;
