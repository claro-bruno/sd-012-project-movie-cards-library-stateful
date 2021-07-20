import React from 'react';
import PropTypes from 'prop-types';

class SubtitleMovie extends React.Component {
  render() {
    const { subtitle, onSubChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          onChange={ onSubChange }
          value={ subtitle }
        />
      </label>
    );
  }
}

export default SubtitleMovie;

SubtitleMovie.propTypes = {
  subtitle: PropTypes.string,
  onSubChange: PropTypes.func,
}.isRequired;
