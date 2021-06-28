import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="resumo" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          name="storyLine"
          onChange={ handleChange }
          id="resumo"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Sinopse;
