import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="sinopse"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sinopse;
