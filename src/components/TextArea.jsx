import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const {
      name,
      testid,
      labelText,
      inputText,
      callback,
    } = this.props;
    const labelid = `${testid}-label`;
    return (
      <label
        htmlFor={ name }
        data-testid={ labelid }
      >
        { labelText }
        <textarea
          id={ name }
          data-testid={ testid }
          value={ inputText }
          onChange={ callback }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default TextArea;
