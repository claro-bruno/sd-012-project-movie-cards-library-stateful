import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { dataTestidLabel, htmlFor, labelText, id, type,
      name, dataTestidInput, change, value, checked,
    } = this.props;
    return (
      <label
        data-testid={ dataTestidLabel }
        htmlFor={ htmlFor }
      >
        { labelText }
        <input
          id={ id }
          type={ type }
          name={ name }
          data-testid={ dataTestidInput }
          onChange={ change }
          value={ value }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataTestidLabel: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestidInput: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Input;
