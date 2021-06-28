import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      type,
      name,
      value,
      checked,
      handleChange,
      labelID,
      inputID,
      text,
      inputType,
    } = this.props;

    return (
      (inputType === 'input'
        ? (
          <label htmlFor={ inputID } data-testid={ labelID }>
            { text }
            <input
              type={ type }
              name={ name }
              value={ value }
              checked={ checked }
              onChange={ handleChange }
              data-testid={ inputID }
            />
          </label>
        )
        : (
          <label htmlFor={ inputID } data-testid={ labelID }>
            { text }
            <textarea
              name={ name }
              value={ value }
              onChange={ handleChange }
              data-testid={ inputID }
            />
          </label>
        )
      )
    );
  }
}

Input.defaultProps = {
  type: 'text',
  checked: false,
  inputType: 'input',
  value: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  labelID: PropTypes.string.isRequired,
  inputID: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  inputType: PropTypes.string,
};

export default Input;
