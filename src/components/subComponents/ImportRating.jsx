import React from 'react';
import PropTypes from 'prop-types';

class ImportRating extends React.Component {
  render() {
    const { handleChange, importRating = 0 } = this.props;
    return (
      <label htmlFor="importRating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="importRating"
          value={ importRating }
          id="importRating"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImportRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  importRating: PropTypes.number,
};

ImportRating.defaultProps = {
  importRating: 0,
};

export default ImportRating;
