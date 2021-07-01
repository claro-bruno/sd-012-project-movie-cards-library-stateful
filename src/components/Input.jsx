import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      id,
      name,
      type,
      labelText,
      value,
      onChange,
      testeid,
      checked,
    } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${testeid}-label` }>
        {labelText}
        <input
          id={ id }
          data-testid={ testeid }
          name={ name }
          type={ type }
          onChange={ onChange }
          value={ value }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  testeid: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  checked: false,
  value: '',
};

export default Input;
