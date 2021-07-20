import React from 'react';
import PropTypes from 'prop-types';

class SubtitleMovie extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          onChange={ onChange }
          value={ subtitle }
        />
      </label>
    );
  }
}

export default SubtitleMovie;

SubtitleMovie.propTypes = {
  subtitle: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
