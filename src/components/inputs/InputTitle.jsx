import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="addTitle" data-testid="title-input-label">
        Título
        <input
          id="addTitle"
          type="text"
          data-testid="title-input"
          name="title"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;
