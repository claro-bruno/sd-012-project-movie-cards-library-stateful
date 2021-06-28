import React from 'react';
import PropTypes from 'prop-types';

class AreaInput extends React.Component {
  render() {
    const { name, value, onChange, text, testid } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${testid}-input-label` }>
        { text }
        <textarea
          type="text"
          data-testid={ `${testid}-input` }
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

AreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default AreaInput;
