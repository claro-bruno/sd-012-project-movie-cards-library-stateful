import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;

    return (
      <label htmlFor="blabla" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputTitle;
