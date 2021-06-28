import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, title, name, func, value } = this.props;

    const labelid = `${name}-input-label`;
    const testid = `${name}-input`;

    return (
      <label htmlFor={ name } data-testid={ labelid }>
        { title }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ func }
          data-testid={ testid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
