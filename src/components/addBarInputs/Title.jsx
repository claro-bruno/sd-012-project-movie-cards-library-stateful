import React from 'react';
import PropTypes from 'prop-types';

function Title({ title, inputHandler }) {
  return (
    <label data-testid="title-input-label" htmlFor="title">
      Título
      <input
        id="title"
        data-testid="title-input"
        type="text"
        value={ title }
        onChange={ (event) => inputHandler(event) }
      />
    </label>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};
export default Title;
