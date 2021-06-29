import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { subtitle, onSubtitleTextChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ onSubtitleTextChange }
          maxLength={ 190 }
        />
      </label>
    );
  }
}

export default AddMovieSubtitle;

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onSubtitleTextChange: PropTypes.func.isRequired,
};
