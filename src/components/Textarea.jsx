import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const {
      textareaId,
      textareaName,
      testIdTextarea,
      testIdLabel,
      value,
      onChange,
      labelText,
    } = this.props;
    return (
      <label
        htmlFor={ textareaId }
        data-testid={ testIdLabel }
      >
        { labelText }
        <textarea
          id={ textareaId }
          value={ value }
          onChange={ onChange }
          data-testid={ testIdTextarea }
          name={ textareaName }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  value: PropTypes.string,
  textareaName: PropTypes.string,
  onChange: PropTypes.func,
  testIdLabel: PropTypes.string,
  testIdTextarea: PropTypes.string,
  textareaId: PropTypes.string,
  labelText: PropTypes.string,
};

Textarea.defaultProps = {
  value: '',
  textareaName: '',
  onChange: console.log,
  testIdLabel: '',
  testIdTextarea: '',
  textareaId: '',
  labelText: '',
};

export default Textarea;
