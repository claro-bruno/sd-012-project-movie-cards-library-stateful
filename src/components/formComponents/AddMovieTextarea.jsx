import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieTextarea extends React.Component {
  render() {
    const { cHandler, value } = this.props;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          onChange={ cHandler }
          data-testid="storyline-input"
          id="storyline"
          value={ value }
        />
      </label>
    );
  }
}

AddMovieTextarea.propTypes = {
  cHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
