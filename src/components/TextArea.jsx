import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const {
      labelText,
      labelId,
      textAreaId,
      textAreaName,
      textAreaValue,
      onChangeTextArea,
    } = this.props;

    return (
      <label data-testid={ labelId } htmlFor={ textAreaId }>
        { labelText }
        <textarea
          data-testid={ textAreaId }
          name={ textAreaName }
          value={ textAreaValue }
          onChange={ onChangeTextArea }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  textAreaId: PropTypes.string.isRequired,
  textAreaName: PropTypes.string.isRequired,
  textAreaValue: PropTypes.string.isRequired,
  onChangeTextArea: PropTypes.func.isRequired,
};

export default TextArea;
