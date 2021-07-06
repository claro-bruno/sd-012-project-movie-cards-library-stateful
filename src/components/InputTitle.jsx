import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, handleClick } = this.props;
    return (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          id="input-title"
          data-testid="title-input"
          value={ value }
          onChange={ handleClick }
        />
      </label>);
  }
}
InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default InputTitle;
