import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { dataTestidLabel, labelText, type,
      name, dataTestidInput, change, value, checked,
    } = this.props;
    return (
      <label
        data-testid={ dataTestidLabel }
        htmlFor={ name }
      >
        { labelText }
        <input
          id={ name }
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
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestidInput: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  change: null,
  checked: false,
};

export default Input;
