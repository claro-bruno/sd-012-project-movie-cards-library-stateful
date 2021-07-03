import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { label, type, name, value, onChange, labelId, inputId } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ labelId }
      >
        <p>{ label }</p>
        <textarea
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ inputId }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelId: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
};

export default TextArea;
