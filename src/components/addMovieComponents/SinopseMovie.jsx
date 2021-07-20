import React from 'react';
import PropTypes from 'prop-types';

class SinopseMovie extends React.Component {
  render() {
    const { storyline, onSinChange } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          onChange={ onSinChange }
        />
      </label>
    );
  }
}

export default SinopseMovie;

SinopseMovie.propTypes = {
  storyline: PropTypes.string,
  onSinChange: PropTypes.func,
}.isRequired;
