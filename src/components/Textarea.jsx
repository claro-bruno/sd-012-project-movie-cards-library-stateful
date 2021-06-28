import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  render() {
    const {
      textareaName,
      textareaLabel,
      textareaLabelTestId,
      textareaId,
      textareaTestId,
      isRequired,
      onChangeTextarea,
      textareaValue,
    } = this.props;

    return (
      <label data-testid={ textareaLabelTestId } htmlFor={ textareaId }>
        { textareaLabel }
        <textarea
          id={ textareaId }
          data-testid={ textareaTestId }
          name={ textareaName }
          value={ textareaValue }
          required={ isRequired }
          onChange={ onChangeTextarea }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  textareaName: PropTypes.string.isRequired,
  textareaLabel: PropTypes.string.isRequired,
  textareaLabelTestId: PropTypes.string.isRequired,
  textareaId: PropTypes.string.isRequired,
  textareaTestId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  onChangeTextarea: PropTypes.func.isRequired,
  textareaValue: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
  isRequired: true,
};

export default Textarea;
