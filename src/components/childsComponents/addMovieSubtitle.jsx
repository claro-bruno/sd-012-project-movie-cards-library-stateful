import React from 'react';
import PropTypes from 'prop-types';

class addMovieSubtitle extends React.Component {
  render() {
    const { handleChange, subtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

addMovieSubtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default addMovieSubtitle;
