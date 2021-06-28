import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { title, name, func, value } = this.props;

    const labelid = `${name}-input-label`;
    const testid = `${name}-input`;

    return (
      <label htmlFor={ name } data-testid={ labelid }>
        { title }
        <input
          type="text"
          name={ name }
          value={ value }
          onChange={ func }
          data-testid={ testid }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;
