import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;

    return (
      <label htmlFor="Sinopse">
        Sinopse
        <textarea
          id="Sinopse"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Sinopse;
