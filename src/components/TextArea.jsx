import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const {
      id,
      testIDLabel,
      labelContent,
      value,
      onChange,
      testIDInput,
      name,
    } = this.props;

    return (
      <label htmlFor={ id } data-testid={ testIDLabel }>
        { labelContent }
        <textarea
          data-testid={ testIDInput }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  testIDLabel: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testIDInput: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextArea;
