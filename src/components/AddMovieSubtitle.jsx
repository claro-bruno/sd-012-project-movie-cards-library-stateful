import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends Component {
  render() {
    const { handle, subtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle-input"
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ handle }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  handle: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default AddMovieSubtitle;
