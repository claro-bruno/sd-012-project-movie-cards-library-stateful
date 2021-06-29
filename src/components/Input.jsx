import React from 'react';
// import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, name, value, dataTestid, dataTestInput, onChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ dataTestid }>
        { label }
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestInput }
        />
      </label>
    );
  }
}

// Input.propTypes = PropTypes.exact({
//   label: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   dataTestId: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// }).isRequired;

export default Input;
