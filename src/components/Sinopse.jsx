import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Sinopse.defaultProps = {
  onChange: () => {},
  value: '',
};

export default Sinopse;
