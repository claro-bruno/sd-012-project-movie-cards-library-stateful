import React from 'react';
import PropTypes from 'prop-types';

class Formlabelrating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          id="rating"
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Formlabelrating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Formlabelrating;
