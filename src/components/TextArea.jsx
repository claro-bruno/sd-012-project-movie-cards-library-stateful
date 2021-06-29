import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { value,
      onChange,
      label,
      labelTestId,
      labelId,
      inputTestId,
      name } = this.props;

    return (
      <section>
        <label data-testid={ labelTestId } htmlFor={ labelId }>
          { label }
          <textarea
            name={ name }
            value={ value }
            onChange={ onChange }
            data-testid={ inputTestId }
            id={ labelId }
          />
        </label>
      </section>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
  name: PropTypes.string,
};

TextArea.defaultProps = {
  value: '',
  name: '',
};

export default TextArea;
