import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Textarea.css';

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
      <div className="textarea-div">
        <label
          data-testid={ textareaLabelTestId }
          htmlFor={ textareaId }
          className="textarea-label"
        >
          { textareaLabel }
        </label>
        <textarea
          className="textarea"
          id={ textareaId }
          data-testid={ textareaTestId }
          name={ textareaName }
          value={ textareaValue }
          required={ isRequired }
          onChange={ onChangeTextarea }
        />
      </div>
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
