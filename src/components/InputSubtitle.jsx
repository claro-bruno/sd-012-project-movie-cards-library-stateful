import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, handleClick } = this.props;
    return (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="input-subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ handleClick }
        />
      </label>);
  }
}
InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default InputSubtitle;
