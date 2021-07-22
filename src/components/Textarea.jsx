import React from 'react';
import PropTypes from 'prop-types';

export default function AddMovieTextarea(props) {
  const { value, onChange } = props;
  return (
    <label htmlFor="storyline" data-testid="storyline-input-label">
      Sinopse
      <textarea
        name="storyline"
        id="storyline"
        data-testid="storyline-input"
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

AddMovieTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
