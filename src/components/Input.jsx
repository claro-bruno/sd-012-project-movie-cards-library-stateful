import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { labelText, type, name, value, onChange } = this.props;
    const labelData = `${name}-input-label`;
    const inputData = `${name}-input`;
    return (
      <label data-testid={ labelData } htmlFor={ inputData }>
        {labelText}
        <input
          data-testid={ inputData }
          type={ type }
          name={ name }
          value={ value }
          id={ inputData }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
