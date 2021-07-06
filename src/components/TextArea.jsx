import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { value, handleClick } = this.props;
    return (
      <label htmlFor="input-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="input-sinopse"
          data-testid="storyline-input"
          value={ value }
          onChange={ handleClick }
        />
      </label>
    );
  }
}
TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default TextArea;
