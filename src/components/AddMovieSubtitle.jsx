import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends Component {
  render() {
    const { subtitle, onChangeSubtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ onChangeSubtitle }
          name="subtitle"
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string,
  onChangeSubtitle: PropTypes.string,
}.isRequired;

export default AddMovieSubtitle;
