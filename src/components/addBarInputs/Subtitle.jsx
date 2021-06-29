import React from 'react';
import PropTypes from 'prop-types';

function Subtitle({ subtitle, inputHandler }) {
  return (
    <label data-testid="subtitle-input-label" htmlFor="subtitle">
      Subtítulo
      <input
        id="subtitle"
        data-testid="subtitle-input"
        type="text"
        value={ subtitle }
        onChange={ (event) => inputHandler(event) }
      />
    </label>
  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};
export default Subtitle;
